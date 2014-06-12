correctCount = 0
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
    
    $.ajax({
      url: "/keyboards/" + keyboardId,
      type: "GET",
      dataType: "json"
      success: (data) ->            
            scriptKeyBoard = document.getElementById("scriptKB")
            scriptKeyBoard.src = "/assets/" + data.name + ".js"
    });


loadWord = () ->
    testingWordsObjects = eval($('#theWords').val())
    targetWord = document.getElementById("targetWord")
    
    if not targetWord
        return false
    
    if targetWord.value.length > 0
        testingWords = []
        for word in testingWordsObjects
            testingWords.push(word.word)
        
        nextIndex = testingWords.indexOf(targetWord.value)+1
        
        if nextIndex >= testingWords.length-1
            changeButton()
        
        if nextIndex < testingWords.length
            targetWord.value = testingWords[nextIndex]
        else
            alert("You are done!")
        
    else
        targetWord.value = testingWordsObjects[0].word
        if testingWordsObject.length = 0
            changeButton()
    

changeButton = () ->
    document.getElementById("submit").innerHTML = "Finish"
    
    
window.submitWord = () ->
    targetWord = document.getElementById("targetWord").value.toLowerCase()
    outputWord = document.getElementById("outputWord").value.toLowerCase()
    
    correctCount+=1 if targetWord == outputWord
        
    loadWord()

    
window.Output = (message) ->
    outputWord = document.getElementById("outputWord")
    outputWord.value = message
    
    
window.OnEnter = () ->
    console.log(correctCount)