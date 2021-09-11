<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="item of data"
      :key="item.name"
      :title="item.name"
      :name="item.name"
    >
      <div v-for="child of item.children" :key="child.name">
        <el-link :href="child.href" target="_blank" rel="noopener noreferrer">
          <span class="flex items-center">
            <img v-if="child.icon" :src="child.icon" class="mr-2" />
            {{ child.name }}
          </span>
        </el-link>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElLink, ElCollapse, ElCollapseItem } from "element-plus";

export default defineComponent({
  name: "TreeBookmarks",
  components: {
    ElLink,
    ElCollapse,
    ElCollapseItem,
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
