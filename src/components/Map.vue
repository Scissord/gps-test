<template>
  <div class="map-container">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import {onMounted, ref, watch} from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'custom-map',
  props: {
    coords: {
      type: Array,
    }
  },
  setup(props) {
    const map = ref(null);
    const polylineLayer = ref(null);

    onMounted(() => {
      map.value = L.map('map').setView([42.3172, 69.5915], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map.value);

      polylineLayer.value = L.layerGroup().addTo(map.value);

      if (props.coords && props.coords.length >= 2) {
        updatePolyline(props.coords);
      }
    });

    watch(() => props.coords, (newCoords) => {
      if (newCoords && newCoords.length >= 2) {
        updatePolyline(newCoords);
      } else {
        clearPolyline();
      }
    });

    const updatePolyline = (newCoords) => {
      clearPolyline();
      const polyline = L.polyline(newCoords, { color: 'blue' }).addTo(polylineLayer.value);
      map.value.fitBounds(polyline.getBounds());
    };

    const clearPolyline = () => {
      if (polylineLayer.value) {
        polylineLayer.value.clearLayers();
      }
    };

    return { map };
  },
};
</script>

<style>
.map-container {
  width: 900px;
  height: 500px;
  margin: 30px auto;
  border: 1px solid black;
}

.map {
  width: 100%;
  height: 100%;
}
</style>
