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
  checkPassword(context: Context, payload: string) {
    const lengthRegex = /.{8,}/
    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/
    const numberRegex = /[0-9]/

    const hasLength = lengthRegex.test(payload)
    const hasUppercase = uppercaseRegex.test(payload)
    const hasLowercase = lowercaseRegex.test(payload)
    const hasSpecials = specialCharRegex.test(payload)
    const hasNumber = numberRegex.test(payload)

    context.commit("checkPassword", {
      hasLength,
      hasUppercase,
      hasLowercase,
      hasSpecials,
      hasNumber,
    })
  },
  displayMode(context: Context) {
    context.commit("setMode", "display")
  },
  inputMode(context: Context) {
    context.commit("setMode", "input")
  },
}
