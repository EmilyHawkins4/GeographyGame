let map;

// all countries
let countryArray = ["canada", "united states of america", "mexico", "guatemala", "belize", "el salvador", "honduras", "nicaragua", "costa rica", "panama", "bahamas", "cuba", "haiti", "dominican republic", "jamaica", "saint lucia", "saint kitts and nevis", "saint vincent and the grenadines", "dominica", "grenada", "trinidad and tobago", "barbados", "antigua and barbuda", "colombia", "venezuela", "argentina", "ecuador", "brazil", "chile", "guyana", "suriname", "peru", "bolivia", "uruguay", "paraguay", "iceland", "norway", "finland", "sweden", "denmark", "czech republic", "romania", "ukraine", "belarus", "bulgaria", "moldova", "croatia", "north macedonia", "bosnia and herzegovina", "luxembourg", "liechtenstein", "albania", "serbia", "kosovo", "san marino", "andorra", "united kingdom", "estonia", "latvia", "lithuania", "spain", "france", "portugal", "netherlands", "belgium", "switzerland", "hungary", "germany", "austria", "poland", "turkey", "vatican", "italy", "montenegro", "monaco", "greece", "malta", "cyprus", "slovakia", "ireland", "slovenia", "timor leste", "malaysia", "indonesia", "brunei", "singapore", "philippines", "taiwan", "china", "russia", "mongolia", "bhutan", "india", "sri lanka", "bangladesh", "pakistan", "afghanistan", "uzbekistan", "tajikistan", "turkmenistan", "kyrgyzstan", "kazakhstan", "azerbaijan", "armenia", "georgia", "jordan", "syria", "kuwait", "qatar", "united arab emirates", "yemen", "oman", "saudi arabia", "iraq", "nepal", "iran", "israel", "maldives", "lebanon", "palestine", "north korea", "south korea", "japan", "vietnam", "bahrain", "thailand", "cambodia", "myanmar", "laos", "djibouti", "eritrea", "egypt", "chad", "sudan", "south sudan", "mozambique", "malawi", "somalia", "senegal", "ghana", "guinea", "guinea bissau", "burkina faso", "democratic republic of the congo", "republic of congo", "central african republic", "uganda", "rwanda", "burundi", "tanzania", "kenya", "zambia", "zimbabwe", "south africa", "eswatini", "lesotho", "namibia", "botswana", "ivory coast", "angola", "seychelles", "sierra leone", "morocco", "algeria", "libya", "tunisia", "sao tome and principe", "mali", "nigeria", "niger", "mauritania", "comoros", "madagascar", "gambia", "liberia", "equatorial guinea", "cape verde", "mauritius", "ethiopia", "gabon", "cameroon", "benin", "togo", "nauru", "palau", "new zealand", "australia", "solomon islands", "marshall islands", "papua new guinea", "vanuatu", "micronesia", "fiji", "samoa", "tuvalu", "kiribati", "tonga"]

// hashmap of country/continent relationshps
let countryMap = new Map([["canada", "N"], ["united states of america", "N"], ["mexico", "N"], ["guatemala", "N"], ["belize", "N"], ["el salvador", "N"], ["honduras", "N"], ["nicaragua", "N"], ["costa rica", "N"], ["panama", "N"], ["bahamas", "N"], ["cuba", "N"], ["haiti", "N"], ["dominican republic", "N"], ["jamaica", "N"], ["saint lucia", "N"], ["saint kitts and nevis", "N"], ["saint vincent and the grenadines", "N"], ["dominica", "N"], ["grenada", "N"], ["trinidad and tobago", "N"], ["barbados", "N"], ["antigua and barbuda", "N"], ["colombia", "S"], ["venezuela", "S"], ["argentina", "S"], ["ecuador", "S"], ["brazil", "S"], ["chile", "S"], ["guyana", "S"], ["suriname", "S"], ["peru", "S"], ["bolivia", "S"], ["uruguay", "S"], ["paraguay", "S"], ["iceland", "E"], ["norway", "E"], ["sweden", "E"], ["finland", "E"], ["denmark", "E"], ["czech republic", "E"], ["romania", "E"], ["ukraine", "E"], ["belarus", "E"], ["bulgaria", "E"], ["moldova", "E"], ["croatia", "E"], ["north macedonia", "E"],["bosnia and herzegovina", "E"], ["luxembourg", "E"], ["liechtenstein", "E"], ["albania", "E"], ["serbia", "E"], ["kosovo", "E"], ["san marino", "E"], ["andorra", "E"], ["united kingdom", "E"], ["estonia", "E"], ["latvia", "E"], ["lithuania", "E"], ["spain", "E"], ["france", "E"], ["portugal", "E"], ["netherlands", "E"], ["belgium", "E"], ["switzerland", "E"], ["hungary", "E"], ["germany", "E"], ["austria", "E"], ["poland", "E"], ["turkey", "E"], ["vatican", "E"], ["italy", "E"], ["montenegro", "E"], ["monaco", "E"], ["greece", "E"], ["malta", "E"], ["cyprus", "E"], ["slovakia", "E"], ["slovenia", "E"], ["ireland", "E"], ["timor leste", "A"], ["malaysia", "A"], ["indonesia", "A"], ["brunei", "A"], ["singapore", "A"], ["philippines", "A"], ["taiwan", "A"], ["china", "A"], ["russia", "A"], ["mongolia", "A"], ["bhutan", "A"], ["india", "A"], ["sri lanka", "A"], ["bangladesh", "A"], ["pakistan", "A"], ["afghanistan", "A"], ["uzbekistan", "A"], ["tajikistan", "A"], ["turkmenistan", "A"], ["kyrgyzstan", "A"], ["kazakhstan", "A"], ["azerbaijan", "A"], ["armenia", "A"], ["georgia", "A"], ["jordan", "A"], ["syria", "A"], ["kuwait", "A"], ["qatar", "A"], ["united arab emirates", "A"], ["yemen", "A"], ["oman", "A"], ["saudi arabia", "A"], ["iraq", "A"], ["nepal", "A"], ["iran", "A"], ["israel", "A"], ["maldives", "A"], ["lebanon", "A"], ["palestine", "A"], ["north korea", "A"], ["south korea", "A"], ["japan", "A"], ["vietnam", "A"], ["bahrain", "A"], ["thailand", "A"], ["cambodia", "A"], ["myanmar", "A"], ["laos", "A"], ["djibouti", "F"], ["eritrea", "F"], ["egypt", "F"], ["chad", "F"], ["sudan", "F"], ["south sudan", "F"], ["mozambique", "F"], ["malawi", "F"], ["somalia", "F"], ["senegal", "F"], ["ghana", "F"], ["guinea", "F"], ["guinea bissau", "F"], ["burkina faso", "F"], ["democratic republic of the congo", "F"], ["republic of congo", "F"], ["central african republic", "F"], ["uganda", "F"], ["rwanda", "F"], ["burundi", "F"], ["tanzania", "F"], ["kenya", "F"], ["zambia", "F"], ["zimbabwe", "F"], ["south africa", "F"], ["eswatini", "F"], ["lesotho", "F"], ["namibia", "F"], ["botswana", "F"], ["ivory coast", "F"], ["angola", "F"], ["seychelles", "F"], ["sierra leone", "F"], ["morocco", "F"], ["algeria", "F"], ["libya", "F"], ["tunisia", "F"], ["sao tome and principe", "F"], ["mali", "F"], ["nigeria", "F"], ["niger", "F"], ["mauritania", "F"], ["comoros", "F"], ["madagascar", "F"], ["gambia", "F"], ["liberia", "F"], ["equatorial guinea", "F"], ["cape verde", "F"], ["mauritius", "F"], ["ethiopia", "F"], ["gabon", "F"], ["cameroon", "F"], ["benin", "F"], ["togo", "F"], ["nauru", "O"], ["palau", "O"], ["new zealand", "O"], ["australia", "O"], ["solomon islands", "O"], ["marshall islands", "O"], ["papua new guinea", "O"], ["vanuatu", "O"], ["micronesia", "O"], ["fiji", "O"], ["samoa", "O"], ["tuvalu", "O"], ["kiribati", "O"], ["tonga", "O"]]);

// number of countries entered
let totalNum=0;

// executes every time page reloads
function initMap() {

  let infowindow = new google.maps.InfoWindow();

  // make map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    disableDefaultUI: true,
    zoom: 2.5,
  });

  // no labels (country names) on the map
  let customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]}];
    map.set('styles',customStyled);

    // show name on hover
    map.data.addListener('mouseover', function(event) {
      let feat = event.feature;
      let html = "<b>"+feat.getProperty('ADMIN')+"</b>";
      infowindow.setContent(html);
      infowindow.setPosition(event.latLng);
      infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
      infowindow.open(map);
    });

    var heading = document.createElement("div")
    heading.id = "heading";
    heading.className = "text-center p-4";
    document.getElementById("content").appendChild(heading);
    var title = document.createElement("h1")
    title.innerHTML = "Country Quiz";
    title.className = "text-4xl font-extrabold";
    document.getElementById("heading").appendChild(title);
    var clock =  document.createElement("h2");
    clock.innerHTML = "<span id='minutes'>00</span>:<span id='seconds'>00</span>"
    clock.className = "text-xl my-1.5"
    document.getElementById("heading").appendChild(clock);
    var startButton = document.createElement("button")
    startButton.innerHTML = "<span>START</span>"
    startButton.className = "hover:bg-transparent bg-black hover:text-black font-semibold text-white py-2 px-5 border hover:border-black border-transparent rounded"
    startButton.id = "startButton"
    startButton.onclick = function start(){
      startGame();
    }
    document.getElementById("heading").appendChild(startButton);

    var continents = document.createElement("div")
    continents.id = "countryCounts"
    continents.className = "text-center text-xl";
    continents.innerHTML = "<h2 class='text-2xl font-bold'><span id='totalCount'>0</span>/197</h2><div id='continents'><h3 class='my-1'>Africa: <span class='font-bold'><span id='afCount'>0</span>/54</span></h3><h3>Asia: <span class='font-bold'><span id='asCount'>0</span>/48</span></h3><h3 class='my-1'>Europe: <span class='font-bold'><span id='euCount'>0</span>/46</span></h3><h3>Oceania: <span class='font-bold'><span id='ocCount'>0</span>/14</span></h3><h3 class='my-1'>North America: <span class='font-bold'><span id='naCount'>0</span>/23</span></h3><h3>South America: <span class='font-bold'><span id='saCount'>0</span>/12</span></h3></div>"
    document.getElementById("content").appendChild(continents);
  }

// called onclick, starts the game 
function startGame() {

  document.querySelector('#startButton').remove();
  
  // display input box
  let inputDiv = document.createElement("div");
  inputDiv.innerHTML="<input type='text' id='stuff' class='w-full px-2 py-2 mt-2 border border-solid rounded border-black' spellcheck='true' oninput='checkInput()' >"
  inputDiv.id="inputDiv"
  document.getElementById("heading").appendChild(inputDiv);

  // display give up button
  let giveup = document.createElement("div");
  giveup.id = "giveUp";
  let giveupdiv = document.createElement("div")
  giveupdiv.id = "buttonGiveup";
  giveup.appendChild(giveupdiv);
  document.getElementById("map").appendChild(giveup);
  let giveUpButton = document.createElement("button");
  let buttonText = document.createElement("span");
  giveUpButton.innerHTML= "Give Up"
  giveUpButton.appendChild(buttonText);
  giveUpButton.onclick = giveUp;
  giveUpButton.className ="hover:bg-transparent bg-black hover:text-black font-semibold text-white py-2 my-4 px-4 border hover:border-black border-transparent rounded";
  document.getElementById("content").appendChild(giveUpButton);
  
  // start timer
  let second = 0;
  function timer (val) { 
    return val > 9 ? val : "0" + val; 
  }
  setInterval(function(){
      document.getElementById("seconds").innerHTML=timer(++second%60);
      document.getElementById("minutes").innerHTML=timer(parseInt(second/60,10));
  }, 1000);
  
}

// called oninput
function checkInput(){

  lowercaseWord = document.getElementById("stuff").value.toLowerCase();
  countryGuessed = spellCheck(lowercaseWord);
  
  // checks if the input is correct
  for(i=0; i<countryArray.length; i++){
    if(countryGuessed ==countryArray[i]){
      
      //clear input box
      document.getElementById("stuff").value = null;

      // remove inputted country from countryArray
      countryArray.splice(i, 1);

      // add geojson to the map
      map.data.loadGeoJson('countries/'+countryGuessed+'.geojson');
      
      // update counts
      $('#totalCount').text( function(i, oldval) {
        return ++oldval;
      });
      updateCountryCount(countryGuessed);
      totalNum++;

      // display win page
      if(totalNum==197){
        var minutes = document.getElementById("minutes").innerText;
        var seconds = document.getElementById("seconds").innerText;
        var total = seconds + (minutes * 60);
        win();
      }

    }
  }
}

// called when give up button is clicked
function giveUp(){

    // countries/mins/seconds
    let numCountries = 197-countryArray.length;
    let mins = document.getElementById("minutes").innerText;
    let secs = document.getElementById("seconds").innerText;

  // remove input section
  if(document.getElementById("content")){
    document.querySelector('#content').remove();
    document.querySelector('#giveUp').remove();
  }

  // create window in center
  let content = document.createElement("div");
  content.id = "content2";
  content.className = "content"
  let h1 = document.createElement("h1");
  h1.innerHTML = "Nice Try!";
  h1.className = "text-4xl font-extrabold py-4"
  content.appendChild(h1);
  let p1 = document.createElement("p");
  p1.innerHTML = "You guessed "+numCountries+" countries in "+mins+" minutes and "+secs+" seconds"
  content.appendChild(p1);
  let p = document.createElement("p");
  p.innerHTML = "Study the map and try again!";
  p.className = "pb-4"
  content.appendChild(p);
  let button = document.createElement("button");
  button.innerHTML = "Play Again"
  button.className ="hover:bg-transparent bg-black hover:text-black font-semibold text-white py-2 px-4 border hover:border-black border-transparent rounded";
  button.id = "thisisabutton"
  button.onclick = function reload() {
    window.location.href = "index.html"
  }
  content.appendChild(button);
  document.getElementById("winlose").appendChild(content);

  // change geojson colors & add names back
  map.data.forEach(function(feature) {
    if (!countryArray.includes(feature.getProperty("ADMIN").toLowerCase())) {
      map.data.remove(feature);
    }
});
  
  map.data.setStyle(function(feature) {
    if (countryArray.includes(feature.getProperty("ADMIN").toLowerCase())) {
      return /** @type {!google.maps.Data.StyleOptions} */({
        fillColor: 'red',
        strokeColor: 'red',
        strokeWeight: 2
      });
    } else {
      return 
    }
  });
  
  for(let i=0; i<countryArray.length; i++){
    let country = countryArray[i];
    map.data.loadGeoJson('countries/'+country+'.geojson');
  }
  let customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "on" }
    ]}];
    map.set('styles',customStyled);
}

// called when user wins
function win(){

  let mins = document.getElementById("minutes").innerText;
  let secs = document.getElementById("seconds").innerText;

  // remove input section
  if(document.getElementById("content")){
    document.querySelector('#content').remove();
    document.querySelector('#giveUp').remove();
  }

  // create window in center
  let content = document.createElement("div");
  content.id = "content2";
  content.className = "content"
  let h1 = document.createElement("h1");
  h1.innerHTML = "Congratulations!";
  h1.className = "text-4xl font-extrabold py-4"
  content.appendChild(h1);
  let p1 = document.createElement("p");
  p1.innerHTML = "You guessed every country in "+mins+" minutes and "+secs+" seconds"
  p1.className = "pb-4"
  content.appendChild(p1);
  let button = document.createElement("button");
  button.innerHTML = "Play Again"
  button.className ="hover:bg-transparent bg-black hover:text-black font-semibold text-white py-2 px-4 border hover:border-black border-transparent rounded";
  button.id = "thisisabutton"
  button.onclick = function reload() {
    window.location.href = "index.html"
  }
  content.appendChild(button);
  document.getElementById("winlose").appendChild(content);
  // add country names back
  let customStyled = [
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
    { visibility: "on" }
    ]}];
    map.set('styles',customStyled);

    map.data = null;

    // confetti
    const start = () => {
      setTimeout(function() {
          confetti.start()
      }, 100);
    };

    const stop = () => {
      setTimeout(function() {
        confetti.stop()
      }, 30000);
    };

    start();
    stop();

}

// updates the country counts based on continent
function updateCountryCount(country){
    let continent = countryMap.get(country);

    switch(continent){
      case "S":
        $('#saCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
      case "F":
        $('#afCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
      case "N":
        $('#naCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
      case "O":
        $('#ocCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
      case "E":
        $('#euCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
      case "A":
        $('#asCount').text( function(i, oldval) {
          return ++oldval;
        });
        break;
    }
}

// allow multiple names to be entered
function spellCheck(word){
  if(word =="usa"|| word=="united states" || word =="the united states" || word =="america" || word =="united states of america"){
    word = "united states of america";
  }
  if(word == "czechia"){
    word = "czech republic";
  }
  if(word == "burma"){
    word = "myanmar";
  }
  if(word == "cabo verde"){
    word = "cape verde";
  }
  if(word == "east timor"){
    word = "timor leste";
  }
  if(word == "holland"){
    word = "netherlands";
  }
  if(word == "swaziland"){
    word = "eswatini";
  }
  if(word == "drc" || word == "zaire"){
    word = "democratic republic of the congo";
  }
  if(word == "car"){
    word = "central african republic";
  }
  if(word == "rep of the congo"|| word == "republic of the congo"|| word == "congo"|| word=="republic of congo"){
    word = "republic of congo";
  }
  if(word == "st lucia" || word =="st. lucia"){
    word = "saint lucia";
  }
  if(word == "st kitts and nevis" ||word == "st. kitts and nevis"){
    word = "saint kitts and nevis";
  }
  if(word == "st vincent" ||word == "st. vincent" || word =="saint vincent"){
    word = "saint vincent and the grenadines";
  }
  if(word == "cote d'ivoire"){
    word = "ivory coast";
  }
  if(word == "uk"){
    word = "united kingdom";
  }
  if(word == "uae"){
    word = "united arab emirates";
  }
  return word;
}

window.initMap = initMap;
