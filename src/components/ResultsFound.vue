<script>
import { store } from "../store";
export default {
  name: "ResultsFound",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="col-3 bg-warning rounded-pill text-center mt-5">
    <h4 class="p-1">
      {{ store.info.count }} Risultati trovati
    </h4>
  </div>
</template>

<style lang="scss" scoped></style>
