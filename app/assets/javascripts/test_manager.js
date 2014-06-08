//
// Loading Test Suites
//
function reloadTestSuites()
{
    $( ".suitesTbl" ).load( "/test_manager/reload_suites", {} );
}
$(document).ready(function(){
    reloadTestSuites();

     $('#new_test_suite').bind('ajax:success', function(evt, data, status, xhr){
        reloadTestSuites();
      });
    
    $('#new_word').bind('ajax:success', function(evt, data, status, xhr){
        reloadWords();
      });
});

//
// Loading Test Suite WORDS
//
var selectedSuite = 1;

function getSelectedSuite()
{
    return selectedSuite;
}
function reloadWords()
{
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: selectedSuite } );
}

function loadSuiteWords(row, suiteId)
{    
    setSelectedRow(row);
    selectedSuite = suiteId;
    
    reloadWords();
}
function cleanRowStyles()
{
    var table = document.getElementById("tsTbl");
    for (var i = 0, row; row = table.rows[i]; i++) {
       $(row).removeClass('success'); 
    }
}
function setSelectedRow(row)
{
    cleanRowStyles();
    $(row).parent('tr').addClass('success');
}