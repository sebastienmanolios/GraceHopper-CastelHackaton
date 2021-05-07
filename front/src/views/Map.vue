<template>
  <div>
    <div id="mapContainer" class="mx-auto">
        <v-card
        class="pa-4"
        flat
        height="200px"
      >
        <v-select
          v-model="selectedCity"
          label="Choisissez votre commune"
          :items="cities"
          item-text="lib_zone"
          item-value="_id"
        ></v-select>
      </v-card>
      <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <map-marker
          :marker="marker[0]"
        />
      </l-map>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { LMap, LTileLayer } from 'vue2-leaflet';
  import MapMarker from '../components/map/MapMarkers'
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'map',
    components: {
      "l-map": LMap,
      "l-tile-layer": LTileLayer,
      "map-marker": MapMarker,
    },

    data() {
      return {
        selectedCity: null,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        center: [43.604652, 1.444209],
        zoom: 8,
        marker:
          [{
            imageUrl: 'http://getdrawings.com/free-icon/red-dot-icon-53.png', 
            coordinates: [0,0]
          }],
      }
    },

    methods: {
      zoomUpdated (zoom) {
        this.zoom = zoom;
        console.log(this.marker)
      },
      centerUpdated (center) {
        this.center = center;
      },

      setLtLg() {
        console.log(this.city);
        this.center = [ this.city.Y, this.city.X ]
        this.marker[0].coordinates = [ this.city.Y, this.city.X ]
      }
    },

    computed: {
      ...mapState(['cities', 'city']),
    },

    mounted () {
      this.center = [ this.city.Y, this.city.X ];
      this.marker.coordinates = [ this.city.Y, this.city.X ];
    },

    watch: {
      selectedCity(newValue, oldValue) {
        this.$store.dispatch('setCityById', newValue);
        this.setLtLg();

        console.log(newValue);
      }
      
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

  #map {
    margin-top: 3em;
  }
</style>