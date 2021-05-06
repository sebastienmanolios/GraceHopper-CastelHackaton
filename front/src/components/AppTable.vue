<template>
  <v-simple-table>
    <template v-slot:default>
      <thead >
        <tr>
          <th class="text-left" style="font-size: 1.4rem" >
            Name
          </th>
          <th class="text-left" style="font-size: 1.4rem">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template> 

<script>
  export default {
    data() {
      return {
        data: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
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