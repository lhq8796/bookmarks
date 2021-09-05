<template>
  <el-row :gutter="10">
    <el-col class="hidden-md-and-down" :lg="3" :xl="6"><div></div></el-col>
    <el-col :md="24" :lg="18" :xl="12">
      <el-menu :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/bookmarks">书签</el-menu-item>
      </el-menu>
      <router-view
    /></el-col>
    <el-col class="hidden-md-and-down" :lg="3" :xl="6"><div></div></el-col>
  </el-row>
</template>

<script>
import { defineComponent, ref } from "vue";
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
    const activeIndex = ref("1");
    return {
      activeIndex,
    };
  },
});
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
