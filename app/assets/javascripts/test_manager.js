function loadSuiteWords(row, suiteId)
{
    cleanRowStyles();
    $(row).parent('tr').addClass('success');
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: suiteId } );
};

function cleanRowStyles()
{
    var table = document.getElementById("tsTbl");
    for (var i = 0, row; row = table.rows[i]; i++) {
       $(row).removeClass('success'); 
    }
}