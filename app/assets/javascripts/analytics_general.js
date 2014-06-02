function reloadCharts()
{
    $( ".suitesTbl" ).load( "/analytics_general/reload_charts");
};

function loadChartView(kname)
{
    $( ".chartView" ).load( "/analytics_general/generate_chart", { kname: kname } );
    // bar chart data
    var barData = {
        labels : ["Test Suite 1","TS 2","Double Letters","TS 5","TS 6","TS 7"],
        datasets : [
        {
            fillColor : "#48A4D1",
            strokeColor : "#0B6121",
            data : [2,15,22,1,15,30]
        }
        ]
    }
                
    // get bar chart canvas
    var buyer = document.getElementById('<%= @keyboard %>').getContext("2d");
    // draw bar chart
    new Chart(buyer).Bar(barData);
};




$(document).ready(function() {
  readloadCharts();
});