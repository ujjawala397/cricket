// -------------------------Total matches Played------------------------
function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);    
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}


function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

//------------------- Matches Won by each Team-------------------
function fetchAndVisualizeDataWon() {    
  fetch("./data_won.json")
    .then(r => r.json())
    .then(visualizeWonData);
}

fetchAndVisualizeDataWon();

function visualizeWonData(data_won) {
  visualizeWonMatches(data_won.matchesWon);
  console.log(data_won);
  return;
}

function visualizeWonMatches(matchesWon) {
  const kkr = [];
  const rcb = [];
  const csk = [];
  const kxp = [];
  const rr =[];
  const dd = [];
  const mi = [];
  const dc = [];
  const ktk = [];
  const pw = [];
  const un = [];
  const sh = [];
  const rps = [];
  const gl = [];
  const dcl = [];
  
  for (let won in matchesWon) {
    kkr.push(matchesWon[won]['Kolkata Knight Riders'] || "");
    rcb.push(matchesWon[won]['Royal Challengers Bangalore']|| "");
    csk.push(matchesWon[won]['Chennai Super Kings'] || "");
    kxp.push(matchesWon[won]['Kings XI Punjab']);
    rr.push(matchesWon[won]['Rajasthan Royals'] || "");
    dd.push(matchesWon[won]['Delhi Daredevils'] || "");
    mi.push(matchesWon[won]['Mumbai Indians'] || "");
    dc.push(matchesWon[won]['Deccan Chargers'] || "");
    ktk.push(matchesWon[won]['Kochi Tuskers Kerala'] || "");
    pw.push(matchesWon[won]['Pune Warriors'] || "");
    un.push(matchesWon[won][''] || "");
    sh.push(matchesWon[won]['Sunrisers Hyderabad'] || "");
    rps.push(matchesWon[won]['Rising Pune Supergiants'] || "");
    gl.push(matchesWon[won]['Gujarat Lions'] || "");
    dcl.push(matchesWon[won]['Delhi Capitals'] || "");
      // console.log(matches[won]['Kings XI Punjab']);
  }

Highcharts.chart('matches-won', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Matches Won by Each Team'
  },
      subtitle: {
      
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      categories: [
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
        pointPadding: 0.2,
        borderWidth: 0
    }
  },
  series: [{
    name: 'Kolkata Knight Riders',
    data: kkr
},{
  name: 'Royal Challengers Bangalore',
  data: rcb

}, {
  name: 'Chennai Super Kings',
  data: csk

}, {
name: 'Kings XI Punjab',
data: kxp

},
{
name: 'Rajasthan Royals',
data: rr

},
{
name: 'Delhi Daredevils',
data: dd

},
{
name: 'Mumbai Indians',
data: mi

},
{
name: 'Deccan Chargers',
data: dc

},
{
name: 'Kochi Tuskers Kerala',
data: ktk

},
{
name: 'Pune Warriors',
data: pw

},
{
name: 'unTold',
data: un

},
{
name: 'Sunrisers Hyderabad',
data: sh

},
{
name: 'Rising Pune Supergiants',
data: rps

},
{
name: 'Gujarat Lions',
data: gl

},
{
  name: 'Delhi Capitals',
  data: dcl

}]
});

}

// --------------------Extra Runs----------------------
function fetchAndVisualizeDataThird() {
  fetch("./data_runs.json")
    .then(r => r.json())
    .then(visualizeDataThird);
}

fetchAndVisualizeDataThird();

function visualizeDataThird(datathird) {
  visualizeextrarunsconcededbyeach(datathird.extraRuns);
  return;
}

function visualizeextrarunsconcededbyeach(extrarunsconcededbyeach) {
  const seriesDataThird = [];
  for (let extra in extrarunsconcededbyeach) {
    seriesDataThird.push([extra, extrarunsconcededbyeach[extra]]);
  }

  // console.log(seriesDataThird);

  Highcharts.chart('extra-runs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Extra Runs Conceded by Each Team in 2016'
    },
    subtitle: {
        text: 'Source: IPL'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Run in 2016: <b>{point.y}</b>'
    },
    series: [{
        name: 'Extra Run',
        data: seriesDataThird,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}
// ----------------------Bowlers---------------------
function fetchAndVisualizeBowlerData() {
  fetch("./data_bowler.json")
    .then(r => r.json())
    .then(visualizeBowler);
}


fetchAndVisualizeBowlerData();

function visualizeBowler(datafourth) {
  visualizetopBowlers(datafourth.topEconomicalPlayers);
  return;
}

function visualizetopBowlers(topEconomicalBowlers) {
  const seriesDataFourth = [];
  for (let top in topEconomicalBowlers) {
    seriesDataFourth.push([top, topEconomicalBowlers[top]]);
  }

  // console.log(seriesDataFourth);

  Highcharts.chart('bowlers', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Economical Bowlers'
    },
    subtitle: {
        text: 'Source: IPL'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: seriesDataFourth,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}

// -------------------------------Story--------------------


function fetchAndVisualizeStoryData() {
  fetch("./data_story.json")
    .then(r => r.json())
    .then(visualizeStoryData);
}

fetchAndVisualizeStoryData();

function visualizeStoryData(datafifth) {
  visualizeStory(datafifth.Story);
  return;
}

function visualizeStory(matchesStory) {
  const obj = [];
  for (let item in matchesStory) {
    obj.push([item, matchesStory[item]]);
  }


  Highcharts.chart('story', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Team won rate'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: obj
    }]
  });
}

// ----------------------Extra Runs Year wise-----------
function fetchAndVisualizeDataLast() {
  fetch("./data_runs.json")
    .then(r => r.json())
    .then(visualizeDataLast);
}

fetchAndVisualizeDataLast();

function visualizeDataLast(dataLast) {
  visualizeextrarunsconcededbyeach(dataLast.years);
  return;
}

function visualizeextrarunsconcededbyeach(extrarunsconcededbyeach) {
  const seriesDataThird = [];
  for (let extra in extrarunsconcededbyeach) {
    seriesDataThird.push([extra, extrarunsconcededbyeach[extra]]);
  }

  // console.log(seriesDataThird);

  Highcharts.chart('extra-runs', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Extra Runs Conceded by Each Team in 2016'
    },
    subtitle: {
        text: 'Source: IPL'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Run in 2016: <b>{point.y}</b>'
    },
    series: [{
        name: 'Extra Run',
        data: seriesDataThird,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}

