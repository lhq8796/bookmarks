<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>我是 ElButton</el-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElButton } from "element-plus";

export default defineComponent({
  name: "About",
  components: {
    ElButton,
  },
});
</script>
