<template>
  <div id="map">
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <MapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
      />
    </l-map>
  </div>
</template>

<script>
  import { LMap, LTileLayer } from 'vue2-leaflet';
  import MapMarker from '../components/map/MapMarkers'
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'map',
    components: {
      "l-map": LMap,
      "l-tile-layer": LTileLayer,
      MapMarker
    },

    data() {
      return {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        center: [ 43.610769, 3.876716 ],
        zoom: 12,
        // markers: [
        //   {id: 1, imageUrl: 'https://img.icons8.com/doodle/48/000000/fish-food--v1.png', coordinates: [ 49.114910, 6.178810 ]},
        //   {id: 2, imageUrl: 'https://img.icons8.com/doodle/48/000000/pizza--v1.png' ,coordinates: [ 49.133290, 6.154370 ]},
        //   {id: 3, imageUrl: 'https://img.icons8.com/doodle/48/000000/croissant--v1.png', coordinates: [ 49.102160, 6.158850 ]},
        //   {id: 4, imageUrl: 'https://img.icons8.com/doodle/48/000000/the-toast--v2.png', coordinates: [ 49.136010, 6.199630 ]},
        //   {id: 5, imageUrl: 'https://img.icons8.com/doodle/48/000000/hamburger.png', coordinates: [ 49.105563, 6.182234 ]},
        // ]
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
    mounted () {
      ;
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