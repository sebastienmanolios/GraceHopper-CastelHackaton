<template>
  <v-container>
    <v-row>
      <v-col
      class="img mt-9"
      :style="{ backgroundImage: 'url(' + require('@/assets/background.jpg') + ')' }"
      mt-9
      >
        <h1 class="display-2 font-weight-bold mb-3 mt-10 text-center">
          Installer vous en OCCITANIE
        </h1>
      </v-col>
    </v-row>
    <v-row>
       <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline mb-9 mt-9">
          Nous vous proposons de juger par vous même des conditions agréables de notre belle région
        </h2>
        <h2>Pick your city !</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppSearch />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- <p v-for="(city, index) in cities" :key="index">
          {{ city }}
        </p> -->
        <p> {{ cities [1]}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppTable :city="cities [1]"/>
      </v-col>
      <v-col> </v-col>
      <v-col> </v-col>
    </v-row>
        
  </v-container>
</template>

<script>
import AppTable from '@/components/AppTable.vue';
import AppSearch from '@/components/AppSearch.vue';
import { mapState } from 'vuex'


export default {
  components: {
    AppSearch,
    AppTable
  },
  created() {
    this.$store.dispatch('setCities')
  },
  computed: {
    ...mapState(['cities'])
  }

};


</script>




<style lang="scss" scoped>
.img {
  width: 100%;
    height: 30vh; 
    overflow: hidden;
  background-size: cover !important;
  // background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 37%, rgba(0,0,0,0.65) 100%), 
}
</style>