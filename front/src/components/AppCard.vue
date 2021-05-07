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
      <!-- <v-img
        src= {{ ImageSrc }}
      ></v-img> -->
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
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
      // image: {
      //   type: String,
      //   default: '' 
      // },
    },
    computed: {
      ImageSrc() {
        return require('@/assets/ecole.jpg')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>