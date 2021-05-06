<template>
  <nav>
    <v-toolbar id="toolbar">
      <v-toolbar-title>
        <span class="px-3">Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="hidden-md-and-up" @click="toggleMenu = !toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-menu
        v-model="showMenu"
        :absolute="toggleMenu"
        :attach="'#toolbar'"
        :content-class="'px-2 elevation-0'"
        :nudge-top="$vuetify.breakpoint.smAndDown?-52:-12"
        min-width="100%">
        <div class="d-flex flex-column flex-md-row justify-end">
            <v-btn
              v-for="(link, index) in links" :key="index"
              class="ma-1"
              text
              rounded
              :to="link.url"
            >
            {{ link.label }}
            </v-btn>
        </div>      
      </v-menu>
    </v-toolbar>
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
                label:'Login',
                url:'/login'
              },
              {
                label:'Signup',
                url:'/signup'
              },
              {
                label: 'Map',
                url: '/map'
              }
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