
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


function loadKeyboardData(row, kbId)
{
    setSelectedRow(row);
    
    $( ".mainViewContainer" ).load( "/analytics_specific/loadup_keyboard", {keyboard_id : kbId});
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