export const TestCpf = (cpf: string) => {
  const cleanCpf = cpf.replace(/[^\d]/g, '')

  let sum = 0
  let rest

  if (
    cleanCpf === '00000000000' ||
    cleanCpf === '11111111111' ||
    cleanCpf === '22222222222' ||
    cleanCpf === '33333333333' ||
    cleanCpf === '44444444444' ||
    cleanCpf === '55555555555' ||
    cleanCpf === '66666666666' ||
    cleanCpf === '77777777777' ||
    cleanCpf === '88888888888' ||
    cleanCpf === '99999999999'
  )
    return false

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (11 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0

  if (rest !== parseInt(cleanCpf.substring(9, 10))) return false

  sum = 0

  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (12 - i)
  }

  rest = (sum * 10) % 11

  if (rest === 10 || rest === 11) rest = 0

  if (rest !== parseInt(cleanCpf.substring(10, 11))) return false

  return true
}
