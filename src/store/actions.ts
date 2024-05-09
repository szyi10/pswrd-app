import { ActionContext, Payload } from "vuex"
import { generatePassword, Generator } from "../lib/generator"
import { State } from "../types"

type Context = ActionContext<State, State>

export default {
  setPassword(context: Context, payload: Generator) {
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
  toggleNumbers(context: Context) {
    context.commit("toggleNumbers")
  },
  toggleSpeicals(context: Context) {
    context.commit("toggleSpeicals")
  },
  displayMode(context: Context) {
    context.commit("setMode", "display")
  },
  inputMode(context: Context) {
    context.commit("setMode", "input")
  },
}
