<script>
import { store } from "../store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container-fluid">
    <div v-if="store.loading"></div>
    <div v-else>
      <div class="col-3 my-4">
        <h1 class="mb-5 text-center">Rick And Morty</h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
