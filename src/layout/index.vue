<template>
  <el-container class="min-h-screen">
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" router>
        <el-menu-item index="/bookmarks">书签</el-menu-item>
        <el-menu-item index="/demo">Demo</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row>
        <el-col class="hidden-md-and-down" :lg="3" :xl="6"></el-col>
        <el-col :md="24" :lg="18" :xl="12">
          <router-view />
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="bg-blue-50" height="340px">
      <el-row class="h-full">
        <el-col class="hidden-md-and-down" :lg="3" :xl="6"></el-col>
        <el-col :md="24" :lg="18" :xl="12" class="py-8">
          <h4 class="text-lg font-bold mb-2">链接</h4>
          <el-link
            class="block"
            type="info"
            :underline="false"
            href="https://github.com/lhq8796/bookmarks"
            target="_blank"
            >代码仓库</el-link
          >
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  ElMenu,
  ElMenuItem,
  ElRow,
  ElCol,
  ElContainer,
  ElHeader,
  ElFooter,
  ElMain,
  ElLink,
} from "element-plus";
export default defineComponent({
  name: "Layout",
  components: {
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElContainer,
    ElHeader,
    ElFooter,
    ElMain,
    ElLink,
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
