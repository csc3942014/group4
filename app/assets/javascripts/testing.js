var testingWords;
var wordIndex;
var correctCount;

function Redirect() 
{
    window.location.href = "www.google.com";
}

function SetProgressBar(pos) 
{
    ProgressBarSide.style.display = "";
    var per = Math.round(pos * 100 / testingWords.length);
    ProgressBar.style.width = per + "%";
    ProgressText.innerText = pos + "/" + testingWords.length;
}

function ReceiveUrlParameters() 
{
    var urltxt = window.location.href;
    var position = urltxt.indexOf("?kb=");
    urltxt = urltxt.substr(position + 4, urltxt.length - position - 4);

    var parameters = urltxt.split("&p=");
    var scriptKeyBoard = document.getElementById("scriptKB");
    var newparams = parameters[0].split("k=");
    scriptKeyBoard.src = "/assets/" + newparams[1] + ".js"; 
            
    testingWords = parameters[1].split(';');

    wordIndex = 0;
    correctCount = 0;
    var txtTarget = document.getElementById("targetWord");
    txtTarget.value = testingWords[0];
    SetProgressBar(wordIndex);
}

function Output(message) 
{
    var txtOutput = document.getElementById("outputWord");
    txtOutput.value = message;
}
        
function OnEnter() 
{
    var txtOutput = document.getElementById("outputWord").value;
    if (txtOutput.toLowerCase() == testingWords[wordIndex].toLowerCase())
        correctCount++;

    if (++wordIndex >= testingWords.length) 
    {
        SetProgressBar(wordIndex);
        alert("finished! correct: " + correctCount + ", total:" + testingWords.length);
        return;
    }
    
    var txtTarget = document.getElementById("targetWord");
    txtTarget.value = testingWords[wordIndex];
    SetProgressBar(wordIndex);
}