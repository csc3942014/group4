//
// Loading Test Suites
//
function reloadTestSuites()
{
    $( ".suitesTbl" ).load( "/test_manager/reload_suites", {} );
}
$(document).ready(function(){
    reloadTestSuites();
});

//
// Loading Test Suite WORDS
//
function loadSuiteWords(row, suiteId)
{
    setSelectedRow(row);
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: suiteId } );
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