<script>
import CardListElement from "./CardListElement.vue";
import { store } from "../store";
export default {
  name: "CardList",
  components: {
    CardListElement,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
    <div class="d-flex flex-wrap gap-2">
      <CardListElement
        v-for="(card, index) in store.results"
        :name="card.name"
        :image="card.image"
      />
    </div>
</template>

<style lang="scss" scoped></style>
