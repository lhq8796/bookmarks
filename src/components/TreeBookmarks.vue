<template>
  <el-card shadow="hover">
    <template #header>
      <div>
        {{ data.name }}
      </div>
    </template>
    <div v-for="item of data.children" :key="item.name">
      <el-link :href="item.href" target="_blank" rel="noopener noreferrer">
        <span class="flex items-center">
          <img v-if="item.icon" :src="item.icon" class="mr-2" />
          {{ item.name }}
        </span>
      </el-link>
    </div>
  </el-card>
</template>

<script>
import { ElCard, ElLink } from "element-plus";

export default {
  name: "TreeBookmarks",
  components: {
    ElCard,
    ElLink,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
