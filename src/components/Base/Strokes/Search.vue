<template>
  <div class="base-strokes-search">
    <CommonSearch @search="search" />
  </div>
</template>

<script>
import { CommonSearch } from "@/components/common";

export default {
  name: "BaseStrokesSearch",
  components: {
    CommonSearch,
  },
  methods: {
    search(query) {
      this.$store.dispatch("baseStrokes/putSearchQuery", query);
    },
  },
};
</script>
