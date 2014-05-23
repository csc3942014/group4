function loadSuiteWords(row, suiteId)
{
    enableNewBUtton();
    setSelectedRow(row);
    
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: suiteId } );
    
};

function cleanRowStyles()
{
    var table = document.getElementById("tsTbl");
    for (var i = 0, row; row = table.rows[i]; i++) {
       $(row).removeClass('success'); 
    }
}
function enableNewBUtton()
{
    document.getElementById("newWrdBtn").classList.remove("disabled");
}
function setSelectedRow(row)
{
    cleanRowStyles();
    $(row).parent('tr').addClass('success');
}