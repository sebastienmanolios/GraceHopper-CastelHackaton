<template>
  <div>
    <div id="mapContainer" class="mx-auto">
        <v-card
        class="pa-4"
        flat
        height="100px"
      >
        <v-select
          v-model="selectedCity"
          label="Choisissez votre commune"
          :items="cities"
          item-text="lib_zone"
          item-value="_id"
        ></v-select>
      </v-card>

<v-container>
  <h2>{{ city.lib_zone }}</h2>
  <v-simple-table>
    <template v-slot:default>
      <thead >
        <tr>
          <th 
            style="font-size: 1.2rem" 
            v-for="(libelle, index) in libelles" :key="index"
          >
            {{ libelle.label }}
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ city.code_qual }}</td>
          <td>{{ city.lib_qual }}</td>
          <td>{{ city.code_o3 }}</td>
          <td>{{ city.code_so2 }}</td>
          <td>{{ city.code_no2 }}</td>
          <td>{{ city.code_pm10 }}</td>
          <td>{{ city.code_pm25 }}</td>
        </tr>

      </tbody>
    </template>
  </v-simple-table>
</v-container>

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
  import AppTable from '../components/AppTable'
  import "leaflet/dist/leaflet.css";

  export default {
    name: 'map',
    components: {
      "l-map": LMap,
      "l-tile-layer": LTileLayer,
      "map-marker": MapMarker,
      AppTable
    },

    data() {
      return {
        selectedCity: null,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        center: [ 43.610769, 3.876716 ],
        zoom: 10,
        marker:
          [{
            imageUrl: 'http://getdrawings.com/free-icon/red-dot-icon-53.png', 
            coordinates: [0,0]
          }],

          libelles: [
          {
            label:'Code Qualité',
          },
          {
            label:'Libellé Qualité',
          },
          {
            label:'O3',
          },
          {
            label:'SO2',
          },
          {
            label: 'NO2',
          },
          {
            label:'PM10',
          },
          {
            label: 'PM25',
          }
        ]
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
</style>