<template>
  <TreeBookmarks :data="bookmarks" />
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
};
</script>
