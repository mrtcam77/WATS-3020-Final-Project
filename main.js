$("document").ready(function() {
  // toggle menu on mobile devices
  $('.handle').on('click', function() {
    $('nav ul').toggleClass('showing');

  });
  // Toggle page product breaks  
  $('.beanies-break').click(function() {
    $('#beanies').toggle(1000);
    $('.glyphicon-menu-up1').css("transform", "rotate(180deg)");

  });

  $('.scarf-break').click(function() {
    $('#scarfs').toggle(1000);
    $('.glyphicon-menu-up2').css("transform", "rotate(180deg)");

  });

  $('.misc-break').click(function() {
    $('#misc').toggle(1000);
    $('.glyphicon-menu-up3').css("transform", "rotate(180deg)");

  });
  //   adding mapbox API
  var mymap = L.map('mapid').setView([47.4310269, -122.3574848], 9);

  L.tileLayer('https://api.mapbox.com/styles/v1/mrtcam77/ciytklt2q00102so6cz6edau7/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mrtcam77/ciytklt2q00102so6cz6edau7',
    accessToken: 'pk.eyJ1IjoibXJ0Y2FtNzciLCJhIjoiY2l5bTVqODJ5MDAycTMyazFxZTNycXNhbiJ9.JH4ylYjDTUXr-HTIFqJnEw'
  }).addTo(mymap);

  //   Yarn Shop Markers
  var marker = L.marker([47.4367156, -122.227484]).addTo(mymap);
  marker.bindPopup("Makers Mercantile").openPopup();

  var fibersMarker = L.marker([47.2575404, -122.4436596]).addTo(mymap);
  marker.bindPopup("Fibers Etc.").openPopup();

  var yorkshireMarker = L.marker([47.2085108, -122.7617698]).addTo(mymap);
  marker.bindPopup("Yorkshire Yarns").openPopup();

  var rainyMarker = L.marker([47.3232078, -122.5337354]).addTo(mymap);
  marker.bindPopup("Rainy Day Yarns").openPopup();

  var townMarker = L.marker([47.4667152, -122.4811817]).addTo(mymap);
  marker.bindPopup("Town Square Fabric and Yarn").openPopup();

  var naturallyMarker = L.marker([47.3230371, -122.5337359]).addTo(mymap);
  marker.bindPopup("Naturally Spun").openPopup();

  var allMarker = L.marker([47.3230371, -122.5337359]).addTo(mymap);
  marker.bindPopup("All Points Yarn").openPopup();

});