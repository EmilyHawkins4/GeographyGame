let map;

var africaNum = 0;
var asiaNum = 0;
var europeNum = 0;
var oceaniaNum = 0;
var naNum = 0; 
var saNum = 0;
var totalNum = africaNum + asiaNum + europeNum + oceaniaNum + naNum + saNum;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2,
  });

  var countriesEntered = ['afghanistan', 'andorra', 'iraq', 'angola', 'argentina', 'australia', 'bulgaria', 'bolivia', "canada", "cuba", "spain", "cape verde"];
  countriesEntered.push('armenia');

  for(i=0;i<countriesEntered.length; i++){
    map.data.loadGeoJson('countries/'+countriesEntered[i]+'.geojson');
  }

  var customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]
    }
    ];
    map.set('styles',customStyled);   

  var total = document.createElement("h2")
  total.innerHTML = "<Strong>Total Countries:</strong>  " + totalNum + "/197";
  document.getElementById("content").appendChild(total)

  var africa = document.createElement("h2")
  africa.innerHTML = "<strong>Africa:</strong>  " + africaNum + "/54";
  document.getElementById("content").appendChild(africa)

  var asia = document.createElement("h2")
  asia.innerHTML = "<strong>Asia:</strong>  " + asiaNum + "/48";
  document.getElementById("content").appendChild(asia)

  var europe = document.createElement("h2")
  europe.innerHTML = "<strong>Europe:</strong>  " + europeNum + "/46";
  document.getElementById("content").appendChild(europe)

  var oceania = document.createElement("h2")
  oceania.innerHTML = "<strong>Oceania:</strong>  " + oceaniaNum + "/14";
  document.getElementById("content").appendChild(oceania)

  var northAmerica = document.createElement("h2")
  northAmerica.innerHTML = "<strong>North America:</strong>  " + naNum + "/23";
  document.getElementById("content").appendChild(northAmerica)

  var southAmerica = document.createElement("h2")
  southAmerica.innerHTML = "<strong>South America:</strong>  " + saNum + "/12";
  document.getElementById("content").appendChild(southAmerica)

}

function startGame(){
    alert("the game has started!");

    var countryInput = document.getElementById("countryInput").value;
    console.log("this is the thing: "+countryInput);

    if(totalNum == 197){
        alert("game over: you win!");
    }
}
