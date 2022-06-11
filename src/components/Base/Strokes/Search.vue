<template>
  <div class="base-strokes-search">
    <CommonSearch :disabled="loading" @search="search" />
  </div>
</template>

<script>
import { CommonSearch } from "@/components/common";

export default {
  name: "BaseStrokesSearch",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    CommonSearch,
  },
  methods: {
    search(query) {
      this.$store.dispatch("baseStrokesSearch/putQuery", query);
    },
  },
};
</script>
