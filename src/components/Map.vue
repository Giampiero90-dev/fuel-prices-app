<template>
  <div id="map"></div>
</template>

<script>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'LeafLetMap',
  mounted() {
    let map = leaflet.map('map').setView([52.3676, 4.9041], 13);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    let marker = leaflet.marker([52.3676, 4.9041]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
  }
}
</script>
