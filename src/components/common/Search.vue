<template>
  <div class="search">
    <input
      id="search-field"
      :disabled="functionalActivityState"
      v-model="query"
      type="text"
    />
    <label for="search-field">
      <button type="button" :disabled="functionalActivityState" @click="search">
        Поиск
      </button>
    </label>
  </div>
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
