<template>
  <v-container>
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
        item-value="X"
      ></v-select>

    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        selectedCity: null,
        id: null,
      }
    },
    computed: {
      ...mapState(['cities'])
    },
    
    methods: {
    },
  }
</script>

<style lang="scss" scoped>

</style>