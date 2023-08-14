google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['hours', 'Sunny', 'Rainy'],
      ['23%',  20,      30],
      ['29%',  32,      10],
      ['58%',  40,       43],
      ['75%',  26,   91],
      ['33%',  10,      21],
      ['20%',  40,      40],
      ['73%',  50,      35],
      ['49%',  35,      73]
    ]);

    var options = {
      vAxis: {minValue: 0},
    //   hAxis: {
    //     title :'your choice',
    //      gridlines: {count: 0}
    //    },
      backgroundColor: {
        fill: '#FF0000',
        fillOpacity: 0.0,
        color: "fffffff"
      }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }



  