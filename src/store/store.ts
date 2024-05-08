import { createStore, Context, Payload } from "vuex"
import { generatePassword, GeneratorTypes } from "../lib/generator"

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
    password: "",
    options: {
      length: 12,
      numbers: true,
      specials: true,
    },
    mode: "display",
  },
  mutations: {
    setPassword(state: State, payload: string) {
      state.password = payload
    },
    setLength(state: State, payload: number) {
      state.options.length = payload
    },
    setMode(state: State, payload: ModeType) {
      state.mode = payload
    },
  },
  actions: {
    setPassword(context: Context, payload: GeneratorTypes) {
      const password = generatePassword({
        length: payload.length,
        numbers: payload.numbers,
        symbols: payload.symbols,
      })

      context.commit("setPassword", password)
    },
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
