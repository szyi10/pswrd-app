import { createStore } from "vuex"
import { State } from "../types"

import rootMutations from "./mutations"
import rootActions from "./actions"
import rootGetters from "./getters"

const store = createStore<State>({
  state: {
    password: "",
    options: {
      length: 16,
      numbers: true,
      specials: true,
    },
    mode: "display",
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})

export default store
