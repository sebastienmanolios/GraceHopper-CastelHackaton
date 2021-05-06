<template>
  <v-simple-table>
    <template v-slot:default>
      <thead >
        <tr>
          <th class="text-left" style="font-size: 1.4rem" >
            Composant
          </th>
          <th class="text-left" style="font-size: 1.4rem">
            Taux
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.rate }}</td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template> 

<script>
  export default {
    props: {
      city: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        data: [
          {
            name: `Qualité de l'air`,
            rate: 159,
          },
          {
            name: 'O3',
            rate: 262,
          },
          {
            name: 'NO2',
            rate: 305,
          },
          {
            name: 'SO2',
            rate: 356,
          },
          {
            name: 'PM10',
            rate: 356,
          },
          {
            name: 'PM25',
            rate: 356,
          },
         
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .slide-up-enter {
    transform: translateY(10px);
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: all 0.2s ease;
  }

  .slide-up-move {
    transition: transform 0.8s ease-in;
  }
</style>