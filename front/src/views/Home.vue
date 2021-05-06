<template>
  <v-container>
    <v-row>
      <v-col
      class="img mt-9"
      :style="{ backgroundImage: 'url(' + require('@/assets/background.jpg') + ')' }"
      mt-9
      >
        <h1 class="display-2 font-weight-bold mb-3 mt-10 text-center">
          Welcome to our App
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppSearch />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import AppSearch from '@/components/AppSearch.vue';

export default {
  components: {
    AppSearch
  },
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