<template>
  <template v-for="item of data">
    <el-card
      v-if="item.type === 1"
      :key="item.name"
      :header="item.name"
      class="mb-4 last:mb-0"
    >
      <TreeBookmarks :data="item.children" />
    </el-card>
    <div v-else-if="item.type === 2" :key="item.name">
      <el-link :href="item.href" target="_blank" rel="noopener noreferrer">
        <span class="flex items-center">
          <img v-if="item.icon" :src="item.icon" class="mr-2" />
          {{ item.name }}
        </span>
      </el-link>
    </div>
  </template>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElLink, ElCard } from "element-plus";

export default defineComponent({
  name: "TreeBookmarks",
  components: {
    ElLink,
    ElCard,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const activeNames = ref([]);

    return { activeNames };
  },
});
</script>
