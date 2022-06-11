<template>
  <v-layout align-center justify-space-between class="base-strokes-functional">
    <v-flex class="base-strokes-functional__item">
      <v-btn
        elevation="2"
        type="button"
        :disabled="generateBaseActivityState"
        @click="generateBase"
      >
        Сгенерировать базу
      </v-btn>
    </v-flex>

    <v-flex class="base-strokes-functional__item">
      <v-btn
        elevation="2"
        type="button"
        :disabled="clearBaseActivityState"
        @click="clearBase"
      >
        Очистить базу
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BaseStrokesFunctional",
  props: {
    apiService: {
      type: Object,
      required: true,
    },
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
    generateBaseActivityState() {
      return !!this.strokesTotal || this.loading;
    },
    clearBaseActivityState() {
      return !this.strokesTotal || this.loading;
    },
  },
  methods: {
    generateRandomString() {
      let stroke = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const charactersLength = characters.length;

      for (let i = 0; i < 100; i++) {
        stroke += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return stroke;
    },
    async generateBase() {
      const totalEntries = 10000;

      const t0 = performance.now();

      await this.$store.dispatch("baseStrokesLoading/putLoading", true);
      for (let i = 0; i < totalEntries; i++) {
        await this.apiService.set(this.generateRandomString());
      }
      await this.$store.dispatch("baseStrokesLoading/putLoading", false);

      const t1 = performance.now();
      console.log("Генерация базы выполнена за ", (t1 - t0).toFixed(4), "мс");
      // 10k записей - стабильно 7 миллисекунд на моем железе
      // 10kk записей | 10.000.000 (тз записи) ÷ 10.000 (10к записей из теста) × 7 (секунды нашего теста) ÷ 60 (секунд в минуте) = 116,6666666666667 (минут займет генерация 10кк записей)
    },
    async clearBase() {
      await this.$store.dispatch("baseStrokesLoading/putLoading", true);
      await this.apiService.clear();
      await this.$store.dispatch("baseStrokesSearch/putQuery", "");
      await this.$store.dispatch("baseStrokesLoading/putLoading", false);
    },
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.base-strokes-functional {
  @media #{map-get($display-breakpoints, 'xs-only')} {
    flex-direction: column;
  }

  &__item {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      width: 100%;
    }

    &:not(:last-child) {
      margin-right: 15px;

      @media #{map-get($display-breakpoints, 'xs-only')} {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
    button {
      width: 100%;
    }
  }
}
</style>
