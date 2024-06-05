<script>
import { store } from "../store";
export default {
  name: "CardsSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      // Emetti un evento "search" con i parametri di ricerca
      this.$emit("search", {
        searchKey: this.store.searchKey,
        searchStatus: this.store.searchStatus,
      });
    },
    reset() {
      // Resetta i campi di ricerca
      this.store.searchKey = "";
      this.store.searchStatus = "";
    },
  },
};
</script>

<template>
  <div class="d-flex my-5">
    <!-- QUI ANDREMO A RICHIMARE L EVENTO 'SEARCH', PERCHè ESSENDO UN FORM CON L EVENTO SUBMIT GESTIRà TUTTO IL CAMPO DI RICERCA -->
    <form class="d-flex gap-2 justify-content-center" @submit.prevent="search">
      <input
        v-model="store.searchKey"
        type="search"
        class="form-control"
        placeholder="Search..."
        aria-label="Search"
      />
      <select
        v-model="store.searchStatus"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected disabled>Select status</option>

        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknow</option>
      </select>
      <!-- ANDREMO A CAMBIARE IL TASTO TPE DA BUTTON A SUBMIT PER RISPETTARE LA CONDIZIONE DESCRITTA SOPRA -->
      <button type="submit" class="btn btn-outline-primary">Search</button>
      <button type="button" @click="reset" class="btn btn-warning">
        Reset
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
