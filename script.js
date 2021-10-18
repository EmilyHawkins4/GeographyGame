let map;

var africaNum = 0;
var asiaNum = 0;
var europeNum = 0;
var oceaniaNum = 0;
var naNum = 0; 
var saNum = 0;
var totalNum = africaNum + asiaNum + europeNum + oceaniaNum + naNum + saNum;

// array of entered countries
var countriesEntered = [];

// array of real countries
var countryArray = ["Canada", "United States", "Mexico", "Guatemala", "Belize", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Bahamas", "Cuba", "Haiti", "Dominican Republic", "Jamaica", "St Lucia", "St Kitts and Nevis", "St Vincent and the Grenadines", "Dominica", "Grenada", "Trinidad and Tobago", "Barbados", "Antigua and Barbuda", "Colombia", "Venezuela", "Argentina", "Ecuador", "Brazil", "Chile", "Guyana", "Suriname", "Peru", "Bolivia", "Uruguay", "Paraguay", "Iceland", "Norway", "Finland", "Sweden", "Denmark", "Czechia", "Romania", "Ukraine", "Belarus", "Bulgaria", "Moldova", "Croatia", "North Macedonia", "Bosnia and Herzegovina", "Luxembourg", "Liechtenstein", "Albania", "Serbia", "Kosovo", "San Marino", "Andorra", "United Kingdom", "Estonia", "Latvia", "Lithuania", "Spain", "France", "Portugal", "Netherlands", "Belgium", "Switzerland", "Hungary", "Germany", "Austria", "Poland", "Turkey", "Vatican", "Italy", "Montenegro", "Monaco", "Greece", "Malta", "Cyprus", "Slovakia", "Ireland", "Slovenia", "Timor Leste", "Malaysia", "Indonesia", "Brunei", "Singapore", "Philippines", "Taiwan", "China", "Russia", "Mongolia", "Bhutan", "India", "Sri Lanka", "Bangladesh", "Pakistan", "Afghanistan", "Uzbekistan", "Tajikistan", "Turkmenistan", "Kyrgyzstan", "Kazakhstan", "Azerbaijan", "Armenia", "Georgia", "Jordan", "Syria", "Kuwait", "Qatar", "United Arab Emirates", "Yemen", "Oman", "Saudi Arabia", "Iraq", "Nepal", "Iran", "Israel", "Maldives", "Lebanon", "Palestine", "North Korea", "South Korea", "Japan", "Vietnam", "Bahrain", "Thailand", "Cambodia", "Myanmar", "Laos", "Djibouti", "Eritrea", "Egypt", "Chad", "Sudan", "South Sudan", "Mozambique", "Malawi", "Somalia", "Senegal", "Ghana", "Guinea", "Guinea Bissau", "Burkina Faso", "Democratic Republic of the Congo", "Republic of the Congo", "Central African Republic", "Uganda", "Rwanda", "Burundi", "Tanzania", "Kenya", "Zambia", "Zimbabwe", "South Africa", "Eswatini", "Lesotho", "Namibia", "Botswana", "Ivory Coast", "Angola", "Seychelles", "Sierra Leone", "Morocco", "Algeria", "Libya", "Tunisia", "Sao Tome and Principe", "Mali", "Nigeria", "Niger", "Mauritania", "Comoros", "Madagascar", "Gambia", "Liberia", "Equatorial Guinea", "Cape Verde", "Mauritius", "Ethiopia", "Gabon", "Cameroon", "Benin", "Togo", "Nauru", "Palau", "New Zealand", "Australia", "Solomon Islands", "Marshall Islands", "Papua New Guinea", "Vanuatu", "Micronesia", "Fiji", "Samoa", "Tuvalu", "Kiribati", "Tonga"]
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
    ]
    }
    ];
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
    var userstuff = document.getElementById("stuff").value;
    
    for(i=0; i<countryArray.length; i++){
      if(userstuff==countryArray[i]){
        document.getElementById("stuff").value = null;
        map.data.loadGeoJson('countries/'+userstuff+'.geojson');
      }
    }
}
