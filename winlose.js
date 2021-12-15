let map;

// executes every time page reloads
function initMap() {

  // make map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 },
    zoom: 2.5,
  });

}