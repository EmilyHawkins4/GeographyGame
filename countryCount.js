var africaNum = 0;
var asiaNum = 0;
var europeNum = 0;
var oceaniaNum = 0;
var saNum = 0;
var naNum = 0;

var totalNum = africaNum + asiaNum + europeNum + oceaniaNum + saNum + naNum;

//display totals
var total = document.createElement("h2")
total.innerHTML = "<Strong>Total Countries:</strong>  " + totalNum + "/197";
document.getElementById("countryCounts").appendChild(total)

var africa = document.createElement("h2")
africa.innerHTML = "<strong>Africa:</strong>  " + africaNum + "/54";
document.getElementById("countryCounts").appendChild(africa)

var asia = document.createElement("h2")
asia.innerHTML = "<strong>Asia:</strong>  " + asiaNum + "/48";
document.getElementById("countryCounts").appendChild(asia)

var europe = document.createElement("h2")
europe.innerHTML = "<strong>Europe:</strong>  " + europeNum + "/46";
document.getElementById("countryCounts").appendChild(europe)

var oceania = document.createElement("h2")
oceania.innerHTML = "<strong>Oceania:</strong>  " + oceaniaNum + "/14";
document.getElementById("countryCounts").appendChild(oceania)

var northAmerica = document.createElement("h2")
northAmerica.innerHTML = "<strong>North America:</strong>  " + naNum + "/23";
document.getElementById("countryCounts").appendChild(northAmerica)

var southAmerica = document.createElement("h2")
southAmerica.innerHTML = "<strong>South America:</strong>  " + saNum + "/12";
document.getElementById("countryCounts").appendChild(southAmerica)