<template>
<v-container>
  <h2>{{ city.lib_zone }}</h2>
  <v-simple-table>
    <template v-slot:default>
      <thead >
        <tr>
          <th 
            style="font-size: 1.2rem" 
            v-for="(libelle, index) in libelles" :key="index"
          >
            {{ libelle.label }}
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ city.code_qual }}</td>
          <td>{{ city.lib_qual }}</td>
          <td>{{ city.code_o3 }}</td>
          <td>{{ city.code_so2 }}</td>
          <td>{{ city.code_no2 }}</td>
          <td>{{ city.code_pm10 }}</td>
          <td>{{ city.code_pm25 }}</td>
        </tr>

      </tbody>
    </template>
  </v-simple-table>
</v-container>
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
        libelles: [
          {
            label:'Code Qualité',
          },
          {
            label:'Libellé Qualité',
          },
          {
            label:'O3',
          },
          {
            label:'SO2',
          },
          {
            label: 'NO2',
          },
          {
            label:'PM10',
          },
          {
            label: 'PM25',
          }
        ]     
      }
    },
  }
</script>

<style lang="scss" scoped>
  .st {
    font-size:3rem;
  }
</style>