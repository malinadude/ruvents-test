<template>
  <div class="base-strokes-search">
    <CommonSearch :disabled="searchActivityState" @search="search" />
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
    strokesTotal: {
      type: Number,
      required: true,
    },
  },
  computed: {
    searchActivityState() {
      return this.loading || !this.strokesTotal;
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
