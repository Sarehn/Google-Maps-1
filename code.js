var map;

window.onload = function() {
  var opt =
  {
      zoom: 15,
      center: new google.maps.LatLng(52.474536, -0.897781),
      mapTypeId: google.maps.MapTypeId.HYBRID
  }

  var map = new google.maps.Map(document.getElementById('map'),opt);
}
