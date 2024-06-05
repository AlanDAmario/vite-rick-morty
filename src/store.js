import { reactive } from "vue";

export const store = reactive({
  results: [],
  info: {},
  loading: true,
  searchStatus: "",
  searchKey: "",

  apiInfo: {
    url: "https://rickandmortyapi.com/api/",

    endPoint: {
      charachter: "character",
    },
  },
});
