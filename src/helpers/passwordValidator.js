export function passwordValidator(password) {
  if (!password) return "Contraseña no puede estar vacío."
  if (password.length < 5) return 'La contraseña debe tener al menos 6 caracteres.'
  return ''
}
