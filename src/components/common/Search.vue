<template>
  <div class="search">
    <input id="search-field" v-model="query" type="text" />
    <label for="search-field">
      <button type="button" @click="search">Поиск</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "CommonSearch",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.query);
    },
  },
};
</script>
