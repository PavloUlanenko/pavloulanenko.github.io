 window.addEventListener('load', function() {
  (function() {
    let coordsRaw = initialPosition = {
      lat: 0,
      lng: 0
    };
    let positionId = null;
    let mapContainer = document.getElementById('osm-map');
    let result = document.querySelector('.result');

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, handleError);
      document.querySelector('.save-progress').onclick = saveProgress;
      document.querySelector('.start-tracking').onclick = observeChanges;
    }else {
      mapContainer.innerText = 'Update your browser. It does not support geolocation API';
    }
      
    function getPosition(position) {
      coordsRaw.lat = +position.coords.latitude;
      coordsRaw.lng = +position.coords.longitude;
      // initialPosition = Object.assign({}, coordsRaw);//to make an independent clone of the object
      drawMap();
    }
    function handleError(error) {
      let errors = {
        0: 'An unknown error occured',
        1: 'You have denied the permission to watch your position',
        2: 'Currently we cannot track your position. Try later',
        3: 'The tracking request has taken too much time'
      };
      mapContainer.innerText = errors[error.code];
    }
    let map = L.map(mapContainer);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'OpenStreetMap Pavel Ulanenko'}).addTo(map);
    let target = L.latLng(coordsRaw.lat, coordsRaw.lng);
    map.setView(target, 19);//zoom 19 is max in Openstreet maps
    L.marker(target).addTo(map);//place the marker
    function drawMap() {
      // let map = L.map(mapContainer);
      // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: 'OpenStreetMap Pavel Ulanenko'}).addTo(map);
      // let target = L.latLng(coordsRaw.lat, coordsRaw.lng);
      // map.setView(target, 19);//zoom 19 is max in Openstreet maps
      // L.marker(target).addTo(map);//place the marker
      function move() {
        // setTimeout(move, 2000);
        // coordsRaw.lat += .0001;
        // coordsRaw.lng += .0001;
        target = L.latLng(coordsRaw.lat, coordsRaw.lng);
        map.setView(target);
        L.marker(target).addTo(map);
        let dst = computeDistance(initialPosition, coordsRaw);
        console.log(dst);
        let distance = `You walked: ${computeDistance(initialPosition, coordsRaw)} km`;
        console.log(distance);
        result.innerHTML = distance;
        initialPosition = coordsRaw;
      }
      move();
    }
    function observeChanges() {
      let options = {
        enableHighAccuracy: true,
        timeout: Infinity,
        maximumAge: 0
      };
      positionId = navigator.geolocation.watchPosition(getPosition, handleError, options);
      document.querySelector('.stop-tracking').onclick = stopObservingChanges;
    }
    function stopObservingChanges() {
      navigator.geolocation.clearWatch(positionId);
      positionId = null;
    }

  function saveProgress() {
    localStorage.setItem('progress', JSON.stringify(document.querySelector('#osm-map').cloneNode(true)));
  }
  function computeDistance(startCoords, destCoords){
    let startLatRads = degreesToRadians(startCoords.lat);
    let startLongRads = degreesToRadians(startCoords.lng);
    let destLatRads = degreesToRadians(destCoords.lat);
    let destLongRads = degreesToRadians(destCoords.lng);
    const Radius = 6371;//Earth radius in km
    let distance = Math.acos(Math.sin(startLatRads)*Math.sin(destLatRads)+ Math.cos(startLatRads)*Math.cos(destLatRads)*Math.cos(startLongRads-destLongRads))*Radius;
    return distance;
  }
  function degreesToRadians(degrees){
    let radians = (degrees * Math.PI) / 180;
    return radians;
  }
  })();
 });