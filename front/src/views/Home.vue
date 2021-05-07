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
          Choisissez le theme que vous pensez indispensable à votre emmenagement puis sélectionner la ville désirée sur la carte
        </h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col 
          v-for="(theme,index) in themes" :key="index">
        <AppCard 
          :headline="theme.title"
          :subtitle="theme.subtitle"
 
        />
      </v-col>
    </v-row>
    


    
    <v-row>
      <v-col>
        <p> {{ cities [1]}}</p>
      </v-col>
    </v-row>
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
import AppTable from '@/components/AppTable.vue';
import AppSearch from '@/components/AppSearch.vue';
import AppCard from '@/components/AppCard.vue';
import { mapState } from 'vuex'


export default {
  components: {
    AppSearch,
    AppTable,
    AppCard
  },
  data() {
    return {
      themes : [
        {
          title: `Qualité de l'air`,
          subtitle: 'Apercu des critères principaux',
          image: 'air'
        },
        {
          title: 'Transports',
          subtitle: 'Trouver le meilleur réseau',
          image: 'transport'
        },
        {
          title: 'Ecoles publiques',
          subtitle: 'Choisissez la bonne école',
          image: "@/assets/ecole.jpg"
        },
      ],
    }
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