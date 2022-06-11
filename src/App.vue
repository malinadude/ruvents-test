<template>
  <v-app>
    <v-main>
      <BaseStrokesComponent />
    </v-main>
  </v-app>
</template>

<script>
import { BaseStrokesComponent } from "./components/Base";

export default {
  name: "App",
  components: {
    BaseStrokesComponent,
  },
};
</script>
