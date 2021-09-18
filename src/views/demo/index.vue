<template>
  <el-link :underline="false" @click="$router.push({ path: '/demo/js-mvc' })"
    >用纯 JavaScript 撸一个 MVC 框架</el-link
  >
</template>

<script>
import { defineComponent } from "vue";
import { ElLink } from "element-plus";

export default defineComponent({
  name: "Demo",
  components: {
    ElLink,
  },
});
</script>
