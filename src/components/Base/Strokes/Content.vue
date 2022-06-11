<template>
  <div
    :class="{
      'base-strokes-content': true,
      'base-strokes-content--loading': loading,
    }"
  >
    <div class="base-strokes-content__list">
      <div
        class="base-strokes-content__item"
        v-for="stroke in strokes"
        :key="stroke.id"
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
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      strokes: [],
    };
  },
  computed: {
    ...mapState("baseStrokesSearch", ["query"]),
  },
  watch: {
    query() {
      this.search();
    },
  },
  methods: {
    async search() {
      const t0 = performance.now();

      await this.$store.dispatch("baseStrokesLoading/putLoading", true);
      this.strokes = await this.apiService.search(this.query);
      await this.$store.dispatch("baseStrokesLoading/putLoading", false);

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
