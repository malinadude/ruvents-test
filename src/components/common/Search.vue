<template>
  <v-layout align-center class="search">
    <v-flex class="search__item">
      <v-text-field
        hide-details="true"
        :disabled="functionalActivityState"
        v-model="query"
      >
      </v-text-field>
    </v-flex>
    <v-flex class="search__item">
      <v-btn type="button" :disabled="functionalActivityState" @click="search">
        Поиск
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CommonSearch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    functionalActivityState() {
      return this.disabled;
    },
  },
  methods: {
    search() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style lang="scss">
.search {
  &__item {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
