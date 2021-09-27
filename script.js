let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2,
  });
  var a = 10;
  var total = document.createElement("div")
  total.innerHTML = "Total Countries:  " + a + "/197";
  document.getElementById("content").appendChild(total)

  var africa = document.createElement("div")
  africa.innerHTML = "Africa:  " + a + "/197";
  document.getElementById("content").appendChild(africa)

  var asia = document.createElement("div")
  asia.innerHTML = "Asia:  " + a + "/197";
  document.getElementById("content").appendChild(asia)

  var europe = document.createElement("div")
  europe.innerHTML = "Europe:  " + a + "/197";
  document.getElementById("content").appendChild(europe)

  var oceania = document.createElement("div")
  oceania.innerHTML = "Oceania:  " + a + "/197";
  document.getElementById("content").appendChild(oceania)

  var northAmerica = document.createElement("div")
  northAmerica.innerHTML = "North America:  " + a + "/197";
  document.getElementById("content").appendChild(northAmerica)

  var southAmerica = document.createElement("div")
  southAmerica.innerHTML = "South America:  " + a + "/197";
  document.getElementById("content").appendChild(southAmerica)
}
