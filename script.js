let map;

var africaNum = 0;
var asiaNum = 0;
var europeNum = 0;
var oceaniaNum = 0;
var naNum = 0; 
var saNum = 0;
var totalNum = 0;

// array of entered countries
var countriesEntered = [];

// array of real countries
var countryArray = ["canada", "united states", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "st lucia", "st kitts and nevis", "st vincent", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czechia", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of the congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]
console.log(countryArray.length);
function initMap() {

  // make map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2,
  });

  // no labels
  var customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]}];
    map.set('styles',customStyled);

  //display totals
    
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

function checkInput(){

    console.log(document.getElementById("stuff").value);
    var userstuff = document.getElementById("stuff").value.toLowerCase();
    
    for(i=0; i<countryArray.length; i++){
      if(userstuff==countryArray[i]){
        document.getElementById("stuff").value = null;
        map.data.loadGeoJson('countries/'+userstuff+'.geojson');
        map.data.setStyle({
          fillColor: "#fc0352",
          strokeColor: "#fc0352"
        });
        console.log("countries/"+userstuff+".geojson");
        totalNum++;
      }
    }
  

}

/*
PROBLEMS I SHOULD BE FIXING
  - same name countries <<<< PRIORITY 6
      - Dominican Republic
      - Nigeria
      - Guniea Bissau
  - make counter work <<<< PRIORITY 4
  - make geo jsons dissapear not reveal
  - start button to reveal input field <<<< PRIORITY 2
  - shouldn't input same country twice <<<< PRIORITY 5
  - add a timer <<<< PRIORITY 3

*/