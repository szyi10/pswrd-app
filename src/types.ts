export interface DisplayMode {
  mode: "input" | "display"
}

export interface Password {
  password: string
}

export interface Options {
  options: {
    length: number
    numbers: boolean
    specials: boolean
  }
}

export interface CheckedPassword {
  checkedPassword: {
    hasLength: boolean
    hasUppercase: boolean
    hasLowercase: boolean
    hasSpecials: boolean
    hasNumber: boolean
  }
}

export interface State
  extends DisplayMode,
    Password,
    Options,
    CheckedPassword {}
