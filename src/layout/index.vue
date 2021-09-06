<template>
  <el-row :gutter="10">
    <el-col class="hidden-md-and-down" :lg="3" :xl="6"><div></div></el-col>
    <el-col :md="24" :lg="18" :xl="12">
      <el-menu :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="/bookmarks">书签</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
      <router-view
    /></el-col>
    <el-col class="hidden-md-and-down" :lg="3" :xl="6"><div></div></el-col>
  </el-row>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { ElMenu, ElMenuItem, ElRow, ElCol } from "element-plus";
export default defineComponent({
  name: "Layout",
  components: {
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
  },
  setup() {
    const route = useRoute();
    const activeIndex = ref(route.matched[0].path);

    return {
      activeIndex,
    };
  },
});
</script>
