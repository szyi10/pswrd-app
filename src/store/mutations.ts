import { State } from "../types"

type CheckPassword = {
  hasLength: boolean
  hasUppercase: boolean
  hasLowercase: boolean
  hasSpecials: boolean
  hasNumber: boolean
}

export default {
  setPassword(state: State, payload: string) {
    state.password = payload
  },
  toggleNumbers(state: State) {
    state.options.numbers = !state.options.numbers
  },
  toggleSpeicals(state: State) {
    state.options.specials = !state.options.specials
  },
  setLength(state: State, payload: number) {
    state.options.length = payload
  },
  setMode(state: State, payload: "input" | "display") {
    state.mode = payload
  },
  checkPassword(state: State, payload: CheckPassword) {
    state.checkedPassword = payload
  },
}
