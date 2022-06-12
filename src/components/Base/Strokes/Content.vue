<template>
  <v-layout column align-center class="base-strokes-content">
    <v-flex class="base-strokes-content__counter" v-show="strokesLength">
      Найденных совпадений: {{ strokesLength }}
    </v-flex>

    <v-flex>
      <v-layout column class="base-strokes-content__list">
        <v-flex
          class="base-strokes-content__item"
          v-for="stroke in strokes"
          :key="stroke.id"
        >
          <p>{{ stroke.val }}</p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
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
    strokesTotal: {
      type: Number,
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
    strokesLength() {
      return this.strokes.length;
    },
  },
  watch: {
    query() {
      this.search();
    },
    strokesTotal(total) {
      if (!total) {
        this.strokes = [];
      }
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
        "Поиск выполнен за ",
        (t1 - t0).toFixed(4),
        "мс",
        this.strokes
      );
      // на 10k записей - стабильно меньше секунды (~30мс)
      // на 1kk записей - нашло 19.199 записей за ~1581мс
    },
  },
};
</script>

<style lang="scss">
.base-strokes-content {
  &__counter {
    margin-bottom: 15px;
    font-weight: bold;
  }
}
</style>
