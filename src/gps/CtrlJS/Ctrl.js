function iniciarMap(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("La geolocalización no es compatible con este navegador.");
  }

   
}
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var coord = {lat: latitude ,lng: longitude};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}