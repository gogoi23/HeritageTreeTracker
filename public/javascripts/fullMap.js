/*
    Full Map Interface 
    Data2 team, Section B
    CS 341 
    Emily Hoppe
*/
/* required for testing suit to register jquery
 const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window); */ 


var arr = [];

var arrReset = [];

//this sends all the trees in the data base and adds them to arr
//the added trees do not show up like the hardcoded ones do. 
$.post('/treeDataFireBase', function (data, status) {
    let treeData = JSON.parse(data);
    for (let i = 0; i < treeData.length; i++) {
        arr.push({
            commonName: treeData[i].COMMON,
            latitude: treeData[i].LAT,
            longitude: treeData[i].LON,
            stateID: treeData[i].STATE_ID,
            height: treeData[i].HEIGHT,
            spread: treeData[i].SPREAD,
            diameter: treeData[i].DIAMETER,
            scientificName: treeData[i].SCIENTIFIC,
            siteAddress: treeData[i].SITE_ADRESS,
            neighborhood: treeData[i].NEIGHBORHOOD,
            yearDesignated: treeData[i].YEAR_Designated,
            notes: treeData[i].NOTES,
            ownership: treeData[i].OWNERSHIP,
            id:treeData[i].OBJECTID
        })
    }
    arrReset = Array.from(arr);
    initMap();
});
//console.log(arr);


var accessed = true;//if building from full array
//set to false if arr only contains commonName, latitude, and longitude

//test and set activity based on if
//we can access db data yet
function setActive(state) {
    accessed = state;
    return accessed;
}

const tempContent = "<h1>temp</h1>";

//array of what filters are active
var filters = [
    {
        before: false,
        between: false,
        after: false,
    },
    {
        public: false,
        ROW: false,
        park: false,
        private: false,
        othero: false,
    },
    {
        cedar: false,
        cherry: false,
        chestnut: false,
        elm: false,
        fir: false,
        magnolia: false,
        maple: false,
        oak: false,
        pine: false,
        redwood: false,
        sequoia: false,
        others: false,
    },
    {
        n: false,
        nw: false,
        ne: false,
        c: false,
        s: false,
        sw: false,
        se: false,
        e: false,
    }
]

const reset = Array.from(filters);

//Neighborhood -> area specifications
const neighs = {
    n: ["ARBOR LODGE", "CATHEDRAL PARK", "EAST COLUMBIA", "KENTON", "OVERLOOK", "PIEDMONT", "PORTSMOUTH", "ST. JOHNS", "UNIVERSITY PARK"],
    ne: ["ALAMEDA", "BEAUMONT-WILSHIRE", "BOISE", "CONCORDIA", "CULLY", "ELIOT", "GRANT PARK", "HUMBOLDT", "IRVINGTON", "KING", "LLOYD DISTRICT", "NORTH TABOR", "ROSE CITY PARK", "SABIN", "SULLIVAN'S GULCH", "VERNON"],
    nw: ["ARLINGTON HEIGHTS", "FOREST PARK", "GOOSE HOLLOW", "HILLSIDE", "NORTHWEST DISTRICT"],
    c: ["OLD TOWN/CHINATOWN", "DOWNTOWN"],
    s: ["SOUTH PORTLAND"],
    sw: ["ARNOLD CREEK", "BRIDLEMILE", "HAYHURST", "HILLSDALE", "MAPLEWOOD", "MARSHALL PARK", "MULTNOMAH", "SOUTH BURLINGAME", "SOUTHWEST HILLS"],
    se: ["ARDENWALD-JOHNSON CREEK", "BRENTWOOD-DARLINGTON", "BROOKLYN", "BUCKMAN", "CRESTON-KENILWORTH", "EASTMORELAND", "FOSTER-POWELL", "HOSFORD-ABERNETHY", "KERNS", "LAURELHURST", "MONTAVILLA", "MT. SCOTT-ARLETA", "MT. TABOR", "SELLWOOD-MORELAND", "SUNNYSIDE", "WOODSTOCK", "REED", "RICHMOND"],
    e: ["CENTENNIAL", "HAZELWOOD", "LENTS", "PARKROSE HEIGHTS", "PLEASANT VALLEY", "POWELLHURST-GILBERT"]
}


//redraw map with new filters, triggered in map.html
function redrawMap(values) {
    if (values.length <= 0) {
        initMap();
        return;
    }
    var desig = false;
    var own = false;
    var spec = false;
    var neigh = false;
    values.forEach(function setFilters(item) {
        switch (item) {
            case "1995":
                filters.before = true;
                desig = true;
                break;
            case "1996":
                filters.between = true;
                desig = true;
                break;
            case "2006":
                filters.after = true;
                desig = true;
                break;
            case "public":
                filters.public = true;
                own = true;
                break;
            case "row":
                filters.RoW = true;
                own = true;
                break;
            case "park":
                filters.park = true;
                own = true;
                break;
            case "private":
                filters.private = true;
                own = true;
                break;
            case "othero":
                filters.otherd = true;
                own = true;
                break;
            default:
                if (speciesCheck(item)) spec = true; 
                else if (neighCheck(item)) neigh = true;
                break;
        }
    });
    if (desig) filterDesig();
    if (own) filterOwn();
    if (spec) filterSpec();
    if (neigh) filterNeigh();
    filters = Array.from(reset);
    initMap();
    arr = Array.from(arrReset);
}

//run switch case on neighborhoods
function neighCheck(item) {
    var rtn = false;
    switch (item) {
        case "n":
            filters.n = true;
            rtn = true;
            break;
        case "nw":
            filters.nw = true;
            rtn = true;
            break;
        case "ne":
            filters.ne = true;
            rtn = true;
            break;
        case "c":
            filters.c = true;
            rtn = true;
            break;
        case "s":
            filters.s = true;
            rtn = true;
            break;
        case "sw":
            filters.sw = true;
            rtn = true;
            break;
        case "se":
            filters.se = true;
            rtn = true;
            break;
        case "e":
            filters.e = true;
            rtn = true;
            break;
        default:
            rtn = false;
            break;
    }
    return rtn;
}

//run switch case on species
function speciesCheck(item) {
    var rtn = false;
    switch (item) {
        case "cedar":
            filters.cedar = true;
            rtn = true;
            break;
        case "cherry":
            filters.cherry = true;
            rtn = true;
            break;
        case "chestnut":
            filters.chestnut = true;
            rtn = true;
            break;
        case "elm":
            filters.elm = true;
            rtn = true;
            break;
        case "fir":
            filters.fir = true;
            rtn = true;
            break;
        case "magnolia":
            filters.magnolia = true;
            rtn = true;
            break;
        case "maple":
            filters.maple = true;
            rtn = true;
            break;
        case "oak":
            filters.oak = true;
            rtn = true;
            break;
        case "pine":
            filters.pine = true;
            rtn = true;
            break;
        case "redwood":
            filters.redwood = true;
            rtn = true;
            break;
        case "sequoia":
            filters.sequoia = true;
            rtn = true;
            break;
        case "others":
            filters.others = true;
            rtn = true;
            break;
        default:
            rtn = false;
            break;
    }
    return rtn;
}

//filter the data by neighborhood
function filterNeigh() {
    var filteredArr = [];
    arr.forEach(function filtN(item) {
        const itemStr = item.neighborhood.toString();
        if(filters.n && contains(neighs.n, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.nw && contains(neighs.nw, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.ne && contains(neighs.ne, itemStr)) filteredArr[filteredArr.length] = item;
        else if(filters.c && contains(neighs.c, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.s && contains(neighs.s, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.sw && contains(neighs.sw, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.se && contains(neighs.se, itemStr)) filteredArr[filteredArr.length] = item;
        else if (filters.e && contains(neighs.e, itemStr)) filteredArr[filteredArr.length] = item;
    });
    arr = Array.from(filteredArr);
}

//helper function to check neighborhood strings for filter
function contains(neis, str){
    for(let i = 0; i < neis.length; i++){
        if(str.indexOf(neis[i]) > -1) return true;
    }
    return false;
}

//filter the data by species
function filterSpec() {
    var filteredArr = [];
    arr.forEach(function filtS(item) {
        const itemStr = item.commonName.toLowerCase();
        if (filters.cedar && itemStr.indexOf("cedar") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.cherry && itemStr.indexOf("cherry") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.chestnut && itemStr.indexOf("chestnut") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.elm && itemStr.indexOf("elm") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.fir && itemStr.indexOf("fir") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.magnolia && itemStr.indexOf("magnolia") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.maple && itemStr.indexOf("maple") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.oak && itemStr.indexOf("oak") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.pine && itemStr.indexOf("pine") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.redwood && itemStr.indexOf("redwood") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.sequoia && itemStr.indexOf("sequoia") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.others && otherCheckSpec(itemStr)) filteredArr[filteredArr.length] = item;
    });
    arr = Array.from(filteredArr);
}

//support function for species filter
function otherCheckSpec(str) { 
    str = str.toString();
    if (str.indexOf("cedar") < 0 && str.indexOf("cherry") < 0 && str.indexOf("chestnut") < 0 && str.indexOf("elm") < 0 && str.indexOf("fir") < 0 && str.indexOf("magnolia") < 0 && str.indexOf("maple") < 0 && str.indexOf("oak") < 0 && str.indexOf("pine") < 0 && str.indexOf("redwood") < 0 && str.indexOf("sequoia") < 0) return true;
    else return false;
}


//Filter the data by year designated
function filterDesig() {
    var filteredArr = [];
    arr.forEach(function filtD(item) {
        if ((filters.before && item.yearDesignated < 1996) || (filters.between && item.yearDesignated > 1995 && item.yearDesignated < 2006)) {
            filteredArr[filteredArr.length] = item;
        } else if (filters.after && item.yearDesignated > 2005) {
            filteredArr[filteredArr.length] = item;
        }
    });
    arr = Array.from(filteredArr);
}

//Filter the data by ownership
function filterOwn() {
    var filteredArr = [];
    arr.forEach(function filtO(item) {
        const itemStr = item.ownership.toLowerCase();
        if (filters.public && itemStr.indexOf("public") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.RoW && (itemStr.indexOf("row") > -1 || itemStr.indexOf("right of way") > -1)) filteredArr[filteredArr.length] = item;
        else if (filters.park && itemStr.indexOf("park") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.private && itemStr.indexOf("private") > -1) filteredArr[filteredArr.length] = item;
        else if (filters.othero && otherCheckOwn(itemStr)) filteredArr[filteredArr.length] = item;
    });
    arr = Array.from(filteredArr);
}

//support function for ownership filter
function otherCheckOwn(str) {
    str = str.toString();
    if (str.indexOf("public") < 0 && str.indexOf("row") < 0 && str.indexOf("right of way") < 0 && str.indexOf("park") < 0 && str.indexOf("private") < 0) return true;
    else return false;
}

//Image used for all icons on map
const icon = "https://cdn-icons-png.flaticon.com/24/616/616707.png";
// The location of Portland
const portland = { lat: 45.5276, lng: -122.6668 };

var dialog = document.getElementById("visitDialog");

// The map, centered at Portland
function initMap() {
    //Init map background
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: portland,
    });
    
    //create markers
    if (arr != null) {
        arr.forEach(function buildMarkers(item) {
            const location = { lat: item.latitude, lng: item.longitude };
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: toTitleCase(item.commonName),
                icon: icon,
                optimized: true, //necessary for large number of icons
            });

            var content = tempContent;
            if (accessed) { content = initIW(item); }

            const infowindow = new google.maps.InfoWindow({
                content: content,
            });
            marker.addListener("mouseover", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
            marker.addListener("mouseout", () => {
                infowindow.close();
            });
            google.maps.event.addListener(marker, 'click', function(){
                
                if(confirm("Would you like to add this " + toTitleCase(item.commonName) + " to your Visited trees?")){
                    if(sessionStorage.getItem("userName") === null || sessionStorage.getItem("userName") === ""){
                        alert("You must be logged in to add a tree to your visited list");
                    }
                    else {
                        let notes = prompt("Would you like to add any notes about this tree? (Press cancel to skip)");
                        if(notes == null) notes = "";
                        console.log(sessionStorage.getItem("ID"));
                        $.post('/addVisit', {id:item.id, userID : sessionStorage.getItem("ID"), Notes: notes},function(data,status){
                            if(data){
                                alert("Tree added succesfully.");
                            }
                            else{
                                alert("This tree is already visited.");
                            }
                        })
                    }
                } 
               });
        });
    }
}


function initIW(item) {

    const windowString = "<!DOCTYPE html>   <!-- <html id=\”infoWindowHTML\”> <h1 id=\”firstHeading\” class=\”firstHeading\”>"
        + toTitleCase(item.commonName)
        + "</h1> <p>Tree ID: 1</p> </html> -->  <body style=\”font-family: Georgia, 'Times New Roman', Times, serif\”>   <h1 style=\”font-weight: bold\”>"
        + toTitleCase(item.commonName) + "</h1>   <style> .left {  width: 35%;  float: left; } .right {  width: 65%;  float: right; } .clear-fix {  clear: both; } table {  display: table;  border-collapse: collapse; } table tr {  display: table-cell; } table tr td {  display: block;  padding-top: 7px; } .left1 {  padding-right: 10px; }  "
        + ".button { display: inline-block; border: none; color: white; background-color: #4CAF50; text-align: center; padding: 12px 23px; } .button:active { background-color: #3e8e41; }  .disabled { opacity: 0.6; cursor: not-allowed; }"
        + " </style>    <table> <tr>  <td><b>ID:</b> "
        + item.stateID + "</td>  <td><b>Height:</b> "
        + item.height + " ft</td>  <td><b>Spread:</b> "
        + item.spread + " ft</td>  <td><b>Diameter:</b> "
        + item.diameter + " ft</td> </tr> <tr>  <td><b>Scientific Name:</b> <i> "
        + item.scientificName + "</i></td>  <td><b>Site Address:</b> "
        + item.siteAddress + "</td>  <td><b>Neighborhood:</b> "
        + item.neighborhood + "</td>  <td><b>Year Designated:</b> "
        + item.yearDesignated + "</td> </tr>   </table>   <br>   <div> <strong>Notes:</strong> <p><em> "
        + item.notes + "</em></p>   </div>   <p><b>Ownership:</b> "
        + item.ownership + "</p>   "
        + "</div> "
        + "<p>Click the icon to add to visited.</p>"
       // + "<button class= \”button \” id= \”visitBtn \” "+ /*onclick= \”addVisited() \”*/ ">Add to Visited</button>   <script> function addVisited(){ document.getElementById( \”visitBtn \”).className =  \”button disabled \”; document.getElementById( \”visitBtn \”).innerHTML =  \”Visited \”;  }</script>"
        + "</body> ";

    return windowString;
}


function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

module.exports = setActive;
module.exports = initMap;
module.exports = initIW;
module.exports = filterDesig;
module.exports = filterOwn;
module.exports = otherCheckOwn;

