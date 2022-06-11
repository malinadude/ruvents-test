<template>
  <v-layout class="base-strokes-search">
    <v-flex>
      <CommonSearch :disabled="searchActivityState" @search="search" />
    </v-flex>
  </v-layout>
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
