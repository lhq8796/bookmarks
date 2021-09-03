<template>
  <el-input v-model="filterText" placeholder="输入关键字进行过滤"> </el-input>
  <el-tree
    ref="tree"
    :filter-node-method="filterNode"
    :data="bookmarks"
    :props="props"
  >
    <template #default="{ node, data }">
      <template v-if="!data.children">
        <el-link
          type="primary"
          :href="data.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="flex items-center">
            <img v-if="data.icon" :src="data.icon" class="mr-2" />
            {{ node.label }}
          </span>
        </el-link>
      </template>
      <template v-else>
        {{ node.label }}
      </template>
    </template>
  </el-tree>
</template>

<script>
import bookmarks from "@/assets/json/bookmarks";
import { ElTree, ElLink, ElInput } from "element-plus";

export default {
  name: "Bookmarks",
  components: {
    ElTree,
    ElLink,
    ElInput,
  },
  data() {
    return {
      filterText: "",
      bookmarks: [bookmarks],
      props: Object.freeze({
        expandTrigger: "hover",
        label: "name",
      }),
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
  },
};
</script>
