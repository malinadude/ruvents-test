<template>
  <div class="base-search">
    <input id="base-search-field" v-model="query" type="text"/>
    <label for="base-search-field">
      <button type="button" @click="search">Поиск</button>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseStrokesSearch",
  props: {
    apiService: {
      type: Object,
      required: true,
    },
  },
  methods: {
    search() {
      this.apiService.search();
    },
  },
};
</script>
