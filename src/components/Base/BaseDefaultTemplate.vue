<template>
  <div class="default-base-template">
    <div class="default-base-template__title">{{ title }}</div>

    <div class="default-base-template__functional">
      <slot name="functional"></slot>
    </div>

    <div class="default-base-template__search">
      <slot name="search"></slot>
    </div>

    <div class="default-base-template__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDefaultTemplate",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
