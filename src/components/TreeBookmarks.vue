<template>
  <div v-if="data.children" class="box">
    <h2>{{ data.name }}</h2>
    <TreeBookmarks
      v-for="item of data.children"
      :data="item"
      :key="uniqueId(item.name + '-')"
    />
  </div>
  <p v-else>
    <a :href="data.href" target="_blank" rel="noopener noreferrer">
      <img :src="data.icon" />
      {{ data.name }}</a
    >
  </p>
</template>

<script>
var uniqueId = require("lodash/uniqueId");

export default {
  name: "TreeBookmarks",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    uniqueId,
  },
};
</script>

<style scoped>
.box {
  padding: 20px;
  border: 1px solid #ccc;
}
.box:not(:last-child) {
  margin-bottom: 20px;
}
</style>
