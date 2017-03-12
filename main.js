$("document").ready(function(){

  $('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');

});
//   adding mapbox API
  var mymap = L.map('mapid').setView([47.4310269, -122.3574848], 9);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/mrtcam77/ciytklt2q00102so6cz6edau7/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mrtcam77/ciytklt2q00102so6cz6edau7',
    accessToken: 'pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw'
}).addTo(mymap);
 var marker = L.marker([47.4367156, -122.227484]).addTo(mymap);
  marker.bindPopup("Makers Mercantile").openPopup();
  
});