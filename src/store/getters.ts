import { DisplayMode, Password, Options } from "../types"

export default {
  password(state: Password) {
    return state.password
  },
  options(state: Options) {
    return state.options
  },
  mode(state: DisplayMode) {
    return state.mode
  },
}
