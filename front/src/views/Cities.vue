<template>
  <div>
    <p>djhdsbkjdsfbqkjb</p>
  </div>
</template>

<script>
  import { mapState } from 'vue';

  export default {
    data() {
      return {
        
      }
    },

    created () {
      this.$store.dispatch('setCities');
    },

    computed: {
      ...mapState(['cities']),
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
