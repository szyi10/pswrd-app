import { DisplayMode, Password, Options, CheckedPassword } from "../types"

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
  checkedPassword(state: CheckedPassword) {
    return state.checkedPassword
  },
}
