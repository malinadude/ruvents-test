<template>
  <BaseDefaultTemplate :title="title">
    <template #functional>
      <Functional :apiService="apiService"/>
    </template>

    <template #search>
      <Search :apiService="apiService"/>
    </template>
  </BaseDefaultTemplate>
</template>

<script>
import StrokeApiService from "@/services/base/StrokeApiService";

import BaseDefaultTemplate from "@/components/Base/BaseDefaultTemplate";
import Functional from "./Functional";
import Search from "./Search";

export default {
  components: {
    BaseDefaultTemplate,
    Functional,
    Search,
  },
  data() {
    return {
      title: "База 'Строки'",
      apiService: new StrokeApiService(),
    };
  },
};
</script>
