<template>
  <TreeBookmarks
    v-for="item of bookmarks"
    :key="item.name"
    class="mb-4 last-mb-0"
    :data="item"
  />
</template>

<script>
import request from "@/utils/request";
import { ref } from "vue";
import TreeBookmarks from "@/components/TreeBookmarks";

export default {
  name: "Bookmarks",
  components: {
    TreeBookmarks,
  },
  setup() {
    const bookmarks = ref([]);
    const initData = () => {
      request.get("/json/bookmarks.json").then((res) => {
        bookmarks.value = res.data;
      });
    };
    initData();

    return {
      bookmarks,
    };
  },
  data() {
    return {
      filterText: "",
      props: Object.freeze({
        expandTrigger: "hover",
        label: "name",
      }),
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
  },
};
</script>

<style scoped>
.last-mb-0:last-child {
  margin-bottom: 0;
}
</style>
