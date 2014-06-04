<<<<<<< HEAD
function(setPageMode){
    window.alert(pageMode);
    
=======
function loadKeyboardFilter()
{
    $( ".filterTbl" ).load( "/analytics_specific/reload_keyboards", {});
}

function loadTestsuiteFilter()
{
    $( ".filterTbl" ).load( "/analytics_specific/reload_testsuites", {});
}

function loadUserFilter()
{
    $( ".filterTbl" ).load( "/analytics_specific/reload_users", {});
}

function loadKeyboardData(row, kbrdId)
{
    setSelectedRow(row);
    
    //$( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: suiteId } );
    
}

function cleanRowStyles()
{
    var table = document.getElementById("theTbl");
    for (var i = 0, row; row = table.rows[i]; i++) {
       $(row).removeClass('success'); 
    }
}

function setSelectedRow(row)
{
    cleanRowStyles();
    $(row).parent('tr').addClass('success');
>>>>>>> 4da20abdc8c84f2a6f394ac87b003c319e70dbea
}