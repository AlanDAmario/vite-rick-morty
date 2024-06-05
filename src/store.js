import { reactive } from "vue";

export const store = reactive({
  results: [],
  info: {},
  status: [],
  loading: true,

  apiInfo: {
    url: "https://rickandmortyapi.com/api/",

    endPoint: {
      charachter: "character",
      aliveStatus: "character/?status=alive",
      deadStatus: "character/?status=dead",
      unknownStatus: "character/?status=unknown",
    },
  },
});
