<template>
  <v-container fluid class="py-0 default-base-template">
    <v-layout
      column
      align-center
      class="default-base-template__block default-base-template__head"
    >
      <CommonLazyLoader class="default-base-template__loader" v-if="loading" />

      <v-flex class="default-base-template__block default-base-template__title">
        <h2>{{ title }}</h2>
      </v-flex>

      <v-flex
        class="default-base-template__block default-base-template__functional"
      >
        <slot name="functional"></slot>
      </v-flex>

      <v-flex
        class="default-base-template__block default-base-template__search"
      >
        <slot name="search"></slot>
      </v-flex>
    </v-layout>

    <v-layout column align-center class="default-base-template__block">
      <v-flex
        class="default-base-template__block default-base-template__content"
      >
        <slot name="content"></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { CommonLazyLoader } from "@/components/Common";

export default {
  name: "BaseDefaultTemplate",
  components: { CommonLazyLoader },
  props: {
    title: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.default-base-template {
  &__head {
    position: relative;
  }
  &__block {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  &__title {
    text-align: center;
  }
  &__loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
