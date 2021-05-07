<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Désolé, la page demandée n'existe pas</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <img src="@/assets/shrug.png" alt="">
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn 
          :to="link.url"
        >
        <h2>Retour à la page d'accueil</h2></v-btn>
        <!-- :to="link.url" -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        toggleMenu: false,
        link: 
          {
            label:'Home',
            url:'/'
          } 
      }
    }
  }
</script>

<style lang="scss" scoped>  

</style>