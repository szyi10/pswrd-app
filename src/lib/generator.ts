export interface Generator {
  length: number
  numbers: boolean
  symbols: boolean
}

export const generatePassword = ({
  length,
  numbers = true,
  symbols = true,
}: Generator): string => {
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let password = ""

  if (numbers) charset += "0123456789"
  if (symbols) charset += "!@#$%^&*()_+~`|}{[]?></"

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }

  return password
}
