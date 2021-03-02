<template>
  <table>
    <thead>
      <th v-for="header in headers" :key="header">{{ header }}</th>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row[0]">
        <td v-for="col in row">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    }
  },
});
</script>

<style scoped>
table {
  display: table;
  width: 100%;
  font-size: 90%;
}

table thead th {
  text-align: left;
  background: black;
  color: lightgray
}
</style>
