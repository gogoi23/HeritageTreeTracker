/*
  Demo Map Interface 
    Data2 team, Section B
    CS 341 
    Emily Hoppe
*/

//Image used for all icons on map
const icon = "https://img.icons8.com/metro/26/000000/deciduous-tree.png";
// The location of Portland
const portland = { lat: 45.5116, lng: -122.6668 };
// The map, centered at Portland

//hardcoded data for tree 1
const latitude = 45.51672923;
const longitude = -122.68401382;
const commonName = "American Elm";
const treeID = "1";
const height = "85";
const spread = "107";
const diameter = "48";
const scientificName = "Ulmus Americana";
const siteAddress = "1111 SW 10th Ave";
const neighborhood = "Downtown";
const yearDesignated = "1973";
const notes = "No notes.";
const ownership = "Private";



// Initialize a demo map with 4 icons
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: portland,
  });
  // The marker, positioned at 
  const testTree1 = { lat: latitude, lng:  longitude};
  const marker1 = new google.maps.Marker({
    position: testTree1,
    map: map,
    title: commonName,
    icon: icon,
    optimized: true, //necessary for large number of icons
  });

  const content1 = "<!DOCTYPE html>   <!-- <html id=\”infoWindowHTML\”> <h1 id=\”firstHeading\” class=\”firstHeading\”>"
   + commonName 
   + "</h1> <p>Tree ID: 1</p> </html> -->  <body style=\”font-family: Arial, sans-serif\”>   <h1 style=\”font-weight: bold\”>American Elm</h1>   <style> .left {  width: 35%;  float: left; } .right {  width: 65%;  float: right; } .clear-fix {  clear: both; } table {  display: table;  border-collapse: collapse; } table tr {  display: table-cell; } table tr td {  display: block;  padding-top: 7px; } .left1 {  padding-right: 10px; }   </style>    <table> <tr>  <td><b>ID:</b> " 
   + treeID + "</td>  <td><b>Height:</b> "
   + height +" ft</td>  <td><b>Spread:</b> " 
   + spread + " ft</td>  <td><b>Diameter:</b> "
   + diameter + " ft</td> </tr> <tr>  <td><b>Scientific Name:</b> <i> "
   + scientificName + "</i></td>  <td><b>Site Address:</b> " 
   + siteAddress + "</td>  <td><b>Neighborhood:</b> "
   + neighborhood + "</td>  <td><b>Year Designated:</b> "
   + yearDesignated + "</td> </tr>   </table>   <br>   <div> <strong>Notes:</strong> <p><em> "
   + notes + "</em></p>   </div>   <p><b>Ownership:</b> "
   + ownership + "</p>   </div> </body> ";


  const infowindow1 = new google.maps.InfoWindow({
    content: content1,
  });
  marker1.addListener("mouseover", () => {
    infowindow1.open({
      anchor: marker1,
      map,
      shouldFocus: false,
    });
  });
  marker1.addListener("mouseout", () => {
    infowindow1.close();
  });

  module.exports = marker1;

  const testTree2 = { lat: 45.46238444, lng: -122.62713406 };
  const marker2 = new google.maps.Marker({
    position: testTree2,
    map: map,
    title: "Spanish Cheshnut",
    icon: icon,
    optimized: true, //necessary for large number of icons
  });
  const testTree3 = { lat: 45.52915034, lng: -122.69989573 };

  const marker3 = marker(testTree3, map, "Japanese Maple");
  /*  new google.maps.Marker({
    position: testTree3,
    map: map,
    title: "Japanese Maple",
    icon: icon,
    optimized: true, //necessary for large number of icons
  }); */
  const testTree4 = { lat: 45.57467033, lng: -122.72547433 };
  const marker4 = new google.maps.Marker({
    position: testTree4,
    map: map,
    title: "Oregon White Oak",
    icon: icon,
    optimized: true, //necessary for large number of icons

  });
}

function marker(pos, ma, title){
  return new google.maps.Marker({
    position: pos,
    map: ma,
    title: title,
    icon: icon,
    optimized: true, //necessary for large number of icons
  });
}
module.exports = initMap;
module.exports = portland;
module.exports = marker;
