import { createStore, Context, Payload } from "vuex"

import rootGetters from "./getters"

interface ModeType {
  mode: "input" | "display"
}

interface State {
  password: string
  options: {
    length: number
    numbers: boolean
    specials: boolean
  }
  mode: ModeType
}

const store = createStore<State>({
  state: {
    password: "test1234",
    options: {
      length: 12,
      numbers: true,
      specials: true,
    },
    mode: "input",
  },
  mutations: {
    setLength(state: State, payload: number) {
      state.options.length = payload
    },
    setMode(state: State, payload: ModeType) {
      state.mode = payload
    },
  },
  actions: {
    setLength(context: Context, payload: Payload) {
      context.commit("setLength", payload)
    },
    displayMode(context: Context) {
      context.commit("setMode", "display")
    },
    inputMode(context: Context) {
      context.commit("setMode", "input")
    },
  },
  getters: rootGetters,
})

export default store
