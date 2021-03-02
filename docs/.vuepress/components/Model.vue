<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <strong>Table Name</strong>: <code>{{ modelTable }}</code>
    </div>
    <Table
      :headers="['DB Column', 'DB Type', 'Description']"
      :rows="modelSchema" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  props: {
    modelTable: {
      type: String,
      required: true,
    },
    modelSchema: {
      type: Array,
      required: true,
    },
  }
});
</script>
