
var opts4 = {title:'Most Populated Species',
width:500,
height:300};

function drawSpeciesChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Tree');
  data.addColumn('number', 'Species');
  data.addRows(addSpeciesData());
  var chart = new google.visualization.PieChart(document.getElementById('species_chart'));
  chart.draw(data, opts4);
}

function addSpeciesData(){
  return [
    ['Oak', 43],
    ['Elm', 19],
    ['Pine', 20],
    ['Cedar', 15],
    ['Maple', 14],
    ['Planetree', 13],
    ['Redwood', 10],
    ['Fir', 10],
    ['Beech', 10],
    ['Caucasian wingnut', 9],
    ['Other', 162],
  ];
}

var opts3 = {title:'Tree Age',
width:500,
height:300};

function drawAgeChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Trees');
  data.addColumn('number', 'Age');
  data.addRows(addAgeData());

  var chart = new google.visualization.PieChart(document.getElementById('age_chart'));
  chart.draw(data, opts3);
}

function addAgeData(){
  return [
    ['Before 2000', 193],
    ['After 2000', 132],
  ];
}

var opts2 = {title:'Tree Owner',
width:500,
height:300};;

function drawOwnerChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Trees');
  data.addColumn('number', 'Owner');
  data.addRows(addOwnData());

  var chart = new google.visualization.PieChart(document.getElementById('owner_chart'));
  chart.draw(data, opts2);
}

function addOwnData(){
  return [
    ['Private', 157],
    ['Public', 168],
  ];
}

var opts = {title:'Top 5 Neighborhoods',
width:500,
height:300};

function drawNeighborhoodChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Trees');
  data.addColumn('number', 'Owner');
  data.addRows(addNeighData());

  var chart = new google.visualization.PieChart(document.getElementById('neighborhood_chart'));
  chart.draw(data, opts);
}

function addNeighData(){
  return [
    ['SELLWOOD-MORELAND', 13],
    ['SOUTHWEST HILLS', 10],
    ['NORTHWEST DISTRICT', 10],
    ['MT. TABOR', 10],
    ['IRVINGTON', 30],
  ];
}

module.exports = 
{drawSpeciesChart, drawAgeChart, drawOwnerChart, drawNeighborhoodChart, 
  opts, opts2, opts3, opts4,
  addSpeciesData, addAgeData, addOwnData, addNeighData
};