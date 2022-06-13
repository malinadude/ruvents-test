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
import { mapState } from "vuex";
import StrokesApiService from "@/services/base/StrokesApiService";
import BaseDefaultTemplate from "@/components/Base/BaseDefaultTemplate";

import Functional from "./Functional";
import Search from "./Search";
import Content from "./Content";

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
      apiService: new StrokesApiService(),
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
