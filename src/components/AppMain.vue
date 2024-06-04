<script>
import CardList from "./CardList.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "MainComponent",
  components: {
    CardList,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(this.store.apiUrl).then((response) => {
      this.store.results = response.data.results;
      this.store.info = response.data.info;
    });
  },
};
</script>
<template>
  <CardList />
</template>
<style lang="scss" scoped></style>
