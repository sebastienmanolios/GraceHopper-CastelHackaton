<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
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
                label:'About',
                url:'/about'
              },
              {
                label:'Login',
                url:'/login'
              },
              {
                label:'Signup',
                url:'/signup'
              },
            ]     
          }
    },
    computed: {
        showMenu() {
            return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>