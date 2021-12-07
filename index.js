let map;

// all countries
var countryArray = ["canada", "united states", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "st lucia", "st kitts and nevis", "st vincent", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czechia", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of the congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]
var totalNum=0;

// executes every time page reloads
function initMap() {

  // make map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2.5,
  });

  // no labels (country names) on the map
  var customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]}];
    map.set('styles',customStyled);

}

// called oninput
function checkInput(){
  console.log(document.getElementById("stuff").value);
  var userInput = document.getElementById("stuff").value.toLowerCase();
  
  // checks if the input is correct
  for(i=0; i<countryArray.length; i++){
    if(userInput ==countryArray[i]){
      countryArray.splice(i, 1);
      console.log("countryarray: " + countryArray)
      document.getElementById("stuff").value = null;
      
      // update count 
      $('#totalCount').text( function(i, oldval) {
        return ++oldval;
      });
      totalNum++;
      console.log(totalNum);
      if(totalNum==197){
        alert("you win!");
        location.href='win.html';
      }

      // add geojson to the map
      map.data.loadGeoJson('countries/'+userInput+'.geojson');
      map.data.setStyle({
        fillColor: "#fc0352",
        strokeColor: "#fc0352"
      });
    }
  }

}

// called onclick, opens input field, starts timer
function startGame() {
  var inputDiv = document.createElement("div");
  inputDiv.innerHTML="<input type='text' id='stuff' spellcheck='true' oninput='checkInput()' >"
  inputDiv.id="inputDiv"
  document.getElementById("inputGoesHere").appendChild(inputDiv);
  console.log(document.getElementById("inputDiv"));

  var giveUpButton = document.createElement("button");
  var buttonText = document.createTextNode("Give Up!");
  giveUpButton.appendChild(buttonText);
  document.getElementById("buttonGoesHere").appendChild(giveUpButton);
  
  // timer
  var sec = 0;
  function pad (val) { 
    return val > 9 ? val : "0" + val; 
  }
  setInterval(function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);
  
}

// partner countries
  // guinea & guinea bissau
  // niger and nigeria
  // dominica & dominican republic

