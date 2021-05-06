<template>
  <v-app>
    <AppNavBar />
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppNavBar from '@/components/AppNavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppNavBar,
    AppFooter
  },
};
</script>
