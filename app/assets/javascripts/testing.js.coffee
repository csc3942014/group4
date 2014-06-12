correctCount = 0
lastTestUnitId = 0
numBackspaces = 0
testingWords = []


# Initializes the page
$(document).on 'page:change', ->
    init()

init = () ->
    loadKeyboard(gup( "keyboard_id" ))
    loadWord()
    
    
#
# Utilities
#
gup = ( name ) ->
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  regexS = "[\\?&]"+name+"=([^&#]*)";
  regex = new RegExp( regexS );
  results = regex.exec( window.location.href );
    
  if results == null
        return null
  else return results[1];

#
#
# All the doing stuff
#
loadKeyboard = (keyboardId) ->
    return "" unless keyboardId?
    keyboardId = 8
    
    $.ajax({
      url: "/keyboards/" + keyboardId,
      type: "GET",
      dataType: "json"
      success: (data) ->            
            scriptKeyBoard = document.getElementById("scriptKB")
            scriptKeyBoard.src = "/assets/" + data.name + ".js"
    });

getAllWords = () ->
    testingWordsObjects = eval($('#theWords').val())
    testingWords = []
    for word in testingWordsObjects
        testingWords.push(word.word)
        
    testingWords

loadWord = () ->
    testingWordsObjects = eval($('#theWords').val())
    targetWord = document.getElementById("targetWord")
    
    if not targetWord
        return false
    
    testingWords = getAllWords()
    
    if targetWord.value.length > 0
        nextIndex = testingWords.indexOf(targetWord.value)+1
        closeTestUnit()
        numBackspaces = 0
        testSession = JSON.parse($('#testSession').val())
        createTestUnit(testingWordsObjects[nextIndex-1].id, testSession.id)
        
        if nextIndex >= testingWords.length-1
            changeButton()
        
        if nextIndex < testingWords.length
            targetWord.value = testingWords[nextIndex]
        else
            SetProgressBar(testingWords.length)
            alert("You are done!")
            completeTesting(testSession.id)
            return false
        
    else
        targetWord.value = testingWordsObjects[0].word
        numBackspaces = 0
        testSession = JSON.parse($('#testSession').val())
        createTestUnit(testingWordsObjects[0].id, testSession.id)
        if testingWordsObjects.length = 0
            changeButton()
            
    SetProgressBar(testingWords.indexOf(targetWord.value))
    

createTestUnit = (wordId, testSessionId) ->
    data = { "test_unit": { "test_session_id":testSessionId, "word_id":wordId } }

    $.ajax({
        url: "/test_units",
        type:'post',
        data: data,
        dataType: "JSON"
        }).success( (json) ->
        	lastTestUnitId = json.id
    );
    
    
closeTestUnit = () ->
    input = document.getElementById("outputWord").value.toLowerCase()
    data = { "test_unit": { "num_backspace":numBackspaces, "end_time":new Date(), "input": input } }

    $.ajax({
        url: "/test_units/" + lastTestUnitId,
        type:'PUT',
        data: data,
        dataType: "JSON"
        });
    
    
completeTesting = (testSessionId) ->
    data = { "test_session_id": testSessionId }

    theUrl  = $('#theUrl').val()
    window.location.href = theUrl + "results/index?test_session_id=" + testSessionId;
    
    
changeButton = () ->
    document.getElementById("submit").innerHTML = "Finish"
    
    
window.submitWord = () ->
    targetWord = document.getElementById("targetWord").value.toLowerCase()
    outputWord = document.getElementById("outputWord").value.toLowerCase()
    
    correctCount+=1 if targetWord == outputWord
        
    loadWord()
        
    document.getElementById("outputWord").value = " "

    
window.Output = (message) ->
    outputWord = document.getElementById("outputWord")
    
    numBackspaces+=1 if outputWord.value.length > message.length
        
    outputWord.value = message
    
    
window.OnEnter = () ->
    console.log(correctCount)
    
SetProgressBar = (pos) ->
    testingWords = getAllWords()
            
    per = Math.round(pos * 100 / testingWords.length);
    ProgressText.innerText = pos + "/" + testingWords.length;
    