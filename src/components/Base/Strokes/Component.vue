<template>
  <BaseDefaultTemplate
    :title="title"
    :loading="loading"
    class="base-strokes-component"
  >
    <template #functional>
      <Functional
        :loading="loading"
        :strokes-total="strokesTotal"
        :apiService="apiService"
      />
    </template>

    <template #search>
      <Search :loading="loading" :strokes-total="strokesTotal" />
    </template>

    <template #content>
      <Content :strokes-total="strokesTotal" :apiService="apiService" />
    </template>
  </BaseDefaultTemplate>
</template>

<script>
import StrokeApiService from "@/services/base/StrokeApiService";
import BaseDefaultTemplate from "@/components/Base/BaseDefaultTemplate";

import Functional from "./Functional";
import Search from "./Search";
import Content from "./Content";
import { mapState } from "vuex";

export default {
  name: "BaseStrokesComponent",
  components: {
    BaseDefaultTemplate,
    Functional,
    Search,
    Content,
  },
  data() {
    return {
      title: "База «Strokes»",
      apiService: new StrokeApiService(),
      strokesTotal: 0,
    };
  },
  computed: {
    ...mapState("baseStrokesLoading", ["loading"]),
  },
  watch: {
    async loading() {
      this.strokesTotal = await this.apiService.count();
    },
  },
  async mounted() {
    this.strokesTotal = await this.apiService.count();
  },
};
</script>
