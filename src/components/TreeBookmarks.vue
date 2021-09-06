<template>
  <el-space v-if="data.type === 1" wrap size="large">
    <el-card shadow="hover">
      <template #header>
        <div>
          {{ data.name }}
        </div>
      </template>
      <TreeBookmarks
        v-for="item of data.children"
        :key="item.name"
        :data="item"
      />
    </el-card>
  </el-space>
  <div v-else-if="data.type === 2">
    <el-link :href="data.href" target="_blank" rel="noopener noreferrer">
      <span class="flex items-center">
        <img v-if="data.icon" :src="data.icon" class="mr-2" />
        {{ data.name }}
      </span>
    </el-link>
  </div>
</template>

<script>
import { ElSpace, ElCard, ElLink } from "element-plus";

export default {
  name: "TreeBookmarks",
  components: {
    ElSpace,
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
