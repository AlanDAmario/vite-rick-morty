<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "CardsSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    getStatus() {
      axios
        .get(
          this.store.apiInfo.url +
            this.store.apiInfo.endPoint.aliveStatus +
            this.store.apiInfo.endPoint.deadStatus +
            this.store.apiInfo.endPoint.unknownStatus
        )
        .then((response) => {
          this.store.aliveStatus = response.data;
          console.log(response.data);
        });
    },
  },
  created() {
    this.getStatus();
  },
};
</script>

<template>
  <div class="d-flex my-5">
    <form action="" class="d-flex gap-2 justify-content-center">
      <input
        type="search"
        class="form-control"
        placeholder="Search..."
        aria-label="Search"
      />
      <select v-model="status" @change="onSearch" class="form-select" aria-label="Default select example">
        <option selected disabled>Select status</option>
        <option v-for="alive in store.results">{{ alive.status }}</option>
        <option value="2">dead</option>
        <option value="3">uknow</option>
      </select>
      <button type="button" class="btn btn-outline-primary">Search</button>
      <button type="button" class="btn btn-outline-warning">Reset</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
