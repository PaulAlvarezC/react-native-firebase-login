export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Correo electrónico no puede estar vacío."
  if (!re.test(email)) return 'Ooops! Se necesita un email válido.'
  return ''
}
