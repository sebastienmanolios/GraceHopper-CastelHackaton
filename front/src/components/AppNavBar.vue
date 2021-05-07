<template>
  <nav>
    <v-app-bar app dark style="background: #565857;">
      <v-toolbar-title style="font-size: 2rem"
      >Occ'MoveIn</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        large
        v-for="(link, index) in links"
        :key="index"
        text 
        rounded 
        :to="link.url"
        >{{ link.label }}
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data() {
        return {
            toggleMenu: false,
            links: [
              {
                label:'Home',
                url:'/'
              },
              {
                label:"Qualité de l'air",
                url:'/map'
              },
              {
                label:'Transport',
                url:'/transport'
              },
              {
                label:'Ecoles',
                url:'/ecole'
              },
              {
                label:'Signup',
                url:'/signup'
              },
              {
                label:'Login',
                url:'/login'
              },
            ]     
          }
    },
    computed: {
        // showMenu() {
        //     return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp
        // }
    }
  }
</script>

<style lang="scss" scoped>

</style>