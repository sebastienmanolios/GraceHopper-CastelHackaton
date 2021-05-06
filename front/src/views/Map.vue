<template>
  <div id="mapContainer">
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
        zoom: 10,
        markers: [
          {id: 1, imageUrl: 'http://getdrawings.com/free-icon/red-dot-icon-53.png', coordinates: [ 43.610769, 3.876716 ]},
        ]
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
    width: 75%;
    height: 100%;
    overflow :hidden
  }
</style>