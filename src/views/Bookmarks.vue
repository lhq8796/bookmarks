<template>
  <TreeBookmarks :data="bookmarks" />
</template>

<script>
import bookmarks from "@/assets/json/bookmarks";
import TreeBookmarks from "@/components/TreeBookmarks";

export default {
  name: "Bookmarks",
  components: {
    TreeBookmarks,
  },
  data() {
    return {
      bookmarks,
    };
  },
};
</script>
