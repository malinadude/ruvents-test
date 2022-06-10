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
      for (let i = 0; i < 1000; i++) {
        await this.apiService.set({val: this.generateRandomString()});
      }
    },
    async clearBase() {
      await this.apiService.clear();
    },
  },
};
</script>
