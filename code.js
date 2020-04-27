var map;

function displayCoordinates(pnt) {
      var lat = pnt.lat();
      lat = lat.toFixed(4);
      var lng = pnt.lng();
      lng = lng.toFixed(4);
      longitude.innerHTML = "Longitude: " + lng;
      latitude.innerHTML = " Latitude: " + lat;
}

window.onload = function() {
  var longitude = document.getElementById("longitude");
  var latitude = document.getElementById("latitude");
  var opt =
  {
      zoom: 15,
      center: new google.maps.LatLng(52.474536, -0.897781),
      mapTypeId: google.maps.MapTypeId.HYBRID
  }

  var map = new google.maps.Map(document.getElementById('map'),opt);

  google.maps.event.addListener(map, 'mousemove', function (event) {
      displayCoordinates(event.latLng);
  });
}
