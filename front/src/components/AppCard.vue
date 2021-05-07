<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
      <v-list-item-title class="headline mb-1">
          {{ headline }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      >
      <v-img
      :src="air"
      ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        :to="link.url"

      >
        Voir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import air from '@/assets/air.jpg'
import ecole from '@/assets/ecole.jpg'
import transport from '@/assets/transport.jpg'
  export default {
    props: {
      headline: {
        type: String,
        default: '' 
      },
      subtitle: {
        type: String,
        default: '' 
      },
      image: {
        type: String,
        default: '' 
      },
    },
    data() {
      return {
        air,
        transport,
        ecole,
        link: 
          {
            label:'',
            url:'/map'
          } 
      }
    },
    computed: {
      source() {
        return this.image
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>