<template>
  <div class="base-strokes-functional">
    <div class="base-strokes-functional__container">
      <div class="base-strokes-functional__buttons">
        <button type="button" @click="generateBase">Сгенерировать базу</button>
        <button type="button" @click="clearBase">Очистить базу</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStrokesFunctional",
  props: {
    apiService: {
      type: Object,
      required: true,
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
      for (let i = 0; i < totalEntries; i++) {
        await this.apiService.set(this.generateRandomString());
      }
      const t1 = performance.now();
      console.log(
        "Generate Took",
        (t1 - t0).toFixed(4),
        "milliseconds to generate"
      );
      // 10k записей - стабильно 7 миллисекунд на моем железе
      // 10kk записей | 10.000.000 (тз записи) ÷ 10.000 (10к записей из теста) × 7 (секунды нашего теста) ÷ 60 (секунд в минуте) = 116,6666666666667 (минут займет генерация 10кк записей)
    },
    async clearBase() {
      await this.apiService.clear();
    },
  },
};
</script>
