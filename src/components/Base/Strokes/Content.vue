<template>
  <div class="base-strokes-content">
    <div class="base-strokes-content__list">
      <div
        class="base-strokes-content__item"
        v-for="stroke in strokes"
        :key="stroke.val"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BaseStrokesContent",
  props: {
    apiService: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      strokes: [],
    };
  },
  computed: {
    ...mapState("baseStrokes", ["searchQuery"]),
  },
  watch: {
    searchQuery() {
      this.search();
    },
  },
  methods: {
    async search() {
      const t0 = performance.now();
      this.strokes = await this.apiService.search(this.searchQuery);
      const t1 = performance.now();
      console.log(
        "Search Took",
        (t1 - t0).toFixed(4),
        "milliseconds to generate",
        this.strokes
      );
      // на 10k записей - стабильно меньше секунды (за 30мс нашел 181 запись на поисковую строку 'B')
    },
  },
};
</script>
