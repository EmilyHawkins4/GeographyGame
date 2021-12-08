let map;

// all countries
var countryArray = ["canada", "united states", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "st lucia", "st kitts and nevis", "st vincent", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czechia", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of the congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]

// country and continent relationshps
let countryMap = new Map([["canada", "NA"], ["united states", "NA"], ["mexico", "NA"], ["guatemala", "NA"], ["belize", "NA"], ["el salvador", "NA"], ["honduras", "NA"], ["nicaragua", "NA"], ["costa rica", 'NA'], ["panama", "NA"], ["bahamas", "NA"], ["cuba", "NA"], ["haiti", "NA"], ["dominican republic", "NA"], ["jamaica", "NA"], ["st lucia", "NA"], ["st kitts and nevis", "NA"], ["st vincent", "NA"], ["dominica", "NA"], ["grenada", "NA"], ["trinidad and tobago", "NA"], ["barbados", "NA"], ["antigua and barbuda", "NA"], ["colombia", "S"], ["venezuela", "S"], ["argentina", "S"], ["ecuador", "S"], ["brazil", "S"], ["chile", "S"], ["guyana", "S"], ["suriname", "S"], ["peru", "S"], ["bolivia", "S"], ["uruguay", "S"], ["paraguay", "S"], ["iceland", "E"], ["norway", "E"], ["sweden", "E"], ["finland", "E"], ["denmark", "E"], ["czechia", "E"], ["romania", "E"], ["ukraine", "E"], ["belarus", "E"], ["bulgaria", "E"], ["moldova", "E"], ["croatia", "E"], ["north macedonia", "E"],["bosnia and herzegovina", "E"], ["luxembourg", "E"], ["liechtenstein", "E"], ["albania", "E"], ["serbia", "E"], ["kosovo", "E"], ["san marino", "E"], ["andorra", "E"], ["united kingdom", "E"], ["estonia", "E"], ["latvia", "E"], ["lithuania", "E"], ["spain", "E"], ["france", "E"], ["portugal", "E"], ["netherlands", "E"], ["belgium", "E"], ["switzerland", "E"], ["hungary", "E"], ["germany", "E"], ["austria", "E"], ["poland", "E"], ["turkey", "E"], ["vatican", "E"], ["italy", "E"], ["montenegro", "E"], ["monaco", "E"], ["greece", "E"], ["malta", "E"], ["cyprus", "E"], ["slovakia", "E"], ["slovenia", "E"], ["ireland", "E"], ["timor leste", "A"], ["malaysia", "A"], ["indonesia", "A"], ["brunei", "A"], ["singapore", "A"], ["philippines", "A"], ["taiwan", "A"], ["china", "A"], ["russia", "A"], ["mongolia", "A"], ["bhutan", "A"], ["india", "A"], ["sri lanka", "A"], ["bangladesh", "A"], ["pakistan", "A"], ["afghanistan", "A"], ["uzbekistan", "A"], ["tajikistan", "A"], ["turkmenistan", "A"], ["kyrgyzstan", "A"], ["kazakhstan", "A"], ["azerbaijan", "A"], ["armenia", "A"], ["georgia", "A"], ["jordan", "A"], ["syria", "A"], ["kuwait", "A"], ["qatar", "A"], ["united arab emirates", "A"], ["yemen", "A"], ["oman", "A"], ["saudi arabia", "A"], ["iraq", "A"], ["nepal", "A"], ["iran", "A"], ["israel", "A"], ["maldives", "A"], ["lebanon", "A"], ["palestine", "A"], ["north korea", "A"], ["south korea", "A"], ["japan", "A"], ["vietnam", "A"], ["bahrain", "A"], ["thailand", "A"], ["cambodia", "A"], ["myanmar", "A"], ["laos", "A"], ["djibouti", "F"], ["eritrea", "F"], ["egypt", "F"], ["chad", "F"], ["sudan", "F"], ["south sudan", "F"], ["mozambique", "F"], ["malawi", "F"], ["somalia", "F"], ["senegal", "F"], ["ghana", "F"], ["guinea", "F"], ["guinea bissau", "F"], ["burkina faso", "F"], ["democratic republic of the congo", "F"], ["republic of the congo", "F"], ["central african republic", "F"], ["uganda", "F"], ["rwanda", "F"], ["burundi", "F"], ["tanzania", "F"], ["kenya", "F"], ["zambia", "F"], ["zimbabwe", "F"], ["south africa", "F"], ["eswatini", "F"], ["lesotho", "F"], ["namibia", "F"], ["botswana", "F"], ["ivory coast", "F"], ["angola", "F"], ["seychelles", "F"], ["sierra leone", "F"], ["morocco", "F"], ["algeria", "F"], ["libya", "F"], ["tunisia", "F"], ["sao tome and principe", "F"], ["mali", "F"], ["nigeria", "F"], ["niger", "F"], ["mauritaina", "F"], ["comoros", "F"], ["madagascar", "F"], ["gambia", "F"], ["liberia", "F"], ["equatorial guinea", "F"], ["cape verde", "F"], ["mauritius", "F"], ["ethiopia", "F"], ["gabon", "F"], ["cameroon", "F"], ["benin", "F"], ["togo", "F"], ["nauru", "O"], ["palau", "O"], ["new zealand", "O"], ["australia", "O"], ["solomon islands", "O"], ["marshall islands", "O"], ["papua new guinea", "O"], ["vanuatu", "O"], ["micronesia", "O"], ["fiji", "O"], ["samoa", "O"], ["tuvalu", "O"], ["kiribati", "O"], ["tonga", "O"]]);

// number of countries entered
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

  // gets user input from input box
  var userInput = document.getElementById("stuff").value.toLowerCase();
  
  // checks if the input is correct
  for(i=0; i<countryArray.length; i++){
    if(userInput ==countryArray[i]){
      
      // remove inputted country from countryArray/clear input box
      countryArray.splice(i, 1);
      console.log("countryarray: " + countryArray)
      document.getElementById("stuff").value = null;
      
      // update count 
      $('#totalCount').text( function(i, oldval) {
        return ++oldval;
      });
      updateCountryCount(userInput);
      totalNum++;

      // display win page
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

// called onclick, starts the game 
function startGame() {
  
  // display input box
  var inputDiv = document.createElement("div");
  inputDiv.innerHTML="<input type='text' id='stuff' spellcheck='true' oninput='checkInput()' >"
  inputDiv.id="inputDiv"
  document.getElementById("inputGoesHere").appendChild(inputDiv);
  console.log(document.getElementById("inputDiv"));

  // display give up button
  var giveUpButton = document.createElement("button");
  var buttonText = document.createElement("span");
  giveUpButton.innerHTML= "Give Up!"
  giveUpButton.appendChild(buttonText);
  //giveUpButton.onclick= moveUser();
  giveUpButton.className = "button";
  giveUpButton.id = "button2";
  document.getElementById("buttonGoesHere").appendChild(giveUpButton);
  
  // start timer
  var sec = 0;
  function pad (val) { 
    return val > 9 ? val : "0" + val; 
  }
  setInterval(function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);
  
}

// move user after give up
function moveUser(){
  location.href='lose.html';
}

// updates the country counts based on continent
function updateCountryCount(country){
    var continent = countryMap.get(country);

    // update south america count
    if(continent=="S"){
      $('#saCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update north america count
    if(continent=="NA"){
      $('#naCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update oceania count
    if(continent=="O"){
      $('#ocCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update europe count
    if(continent=="E"){
      $('#euCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update asia count
    if(continent=="A"){
      $('#asCount').text( function(i, oldval) {
        return ++oldval;
      });
    }

    // update africa count
    if(continent=="F"){
      $('#afCount').text( function(i, oldval) {
        return ++oldval;
      });
    }
}

// partner countries
  // guinea & guinea bissau
  // niger and nigeria
  // dominica & dominican republic

