<template>
  <l-map :center="center"
   :zoom="zoom"
   class="map"
   ref="map"
   @update:zoom="zoomUpdated"
   @update:center="centerUpdated"
  >
    <l-tile-layer
     :url="url"
   >
  </l-map>
</template>

<script>
  // import L from 'leaflet'; 
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'Map',
    component: {
      LMap,
      LTileLayer,
      LMarker,
    },

    data() {
      return {
        url: 'http://tile.openstreetmap.fr/?layers=B00000000FFFFFF',
        center: [ 49.1193089, 6.1757156 ],
        zoom: 12,
      }
    },

    methods: {
      zoomUpdated (zoom) {
        this.zoom = zoom;
        console.log(this.markers)
      },
      centerUpdated (center) {
        this.center = center;
      }
    },
    computed: {
    },
  }
</script>

<style lang="scss" scoped>
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow :hidden
  }
</style>