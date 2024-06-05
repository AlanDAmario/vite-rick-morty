<script>
import CardList from "./CardList.vue";
import ResultsFound from "./ResultsFound.vue";
import CardsSearch from "./CardsSearch.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "MainComponent",
  components: {
    CardList,
    ResultsFound,
    CardsSearch,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getCharacters() {
      axios
        .get(this.store.apiInfo.url + this.store.apiInfo.endPoint.charachter)
        .then((response) => {
          const { results, info } = response.data;
          this.store.results = results;
          this.store.info = info;
          this.store.loading = false;
        });
    },
  },
  created() {
    this.getCharacters();
  },
};
</script>
<template>
  <div class="container">
    <div v-if="store.loading" class="d-flex align-items-center mt-5">
      <strong role="status" class="fs-4">Loading...</strong>
      <div
        class="spinner-border ms-auto"
        style="width: 3rem; height: 3rem"
        aria-hidden="true"
      ></div>
    </div>
    <div v-else>
      <CardsSearch />
      <CardList />
      <ResultsFound />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
