<template>
<v-container>
  <v-row>
      <v-col>
        <AppTable :city="cities[1]"/>
      </v-col>
      <v-col> </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AppTable from '@/components/AppTable.vue';


  export default {
    components: {
    AppTable,
    },
    computed: {
    ...mapState(['cities'])
  }
    
  }
</script>

<style lang="scss" scoped>

</style>