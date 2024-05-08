interface PaswordType {
  password: string
}

interface OptionsType {
  options: {
    length: number
    numbers: boolean
    specials: boolean
  }
}

interface ModeType {
  mode: "input" | "display"
}

export default {
  password(state: PaswordType) {
    return state.password
  },
  options(state: OptionsType) {
    return state.options
  },
  mode(state: ModeType) {
    return state.mode
  },
}
