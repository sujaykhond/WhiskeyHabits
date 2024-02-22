import decode from 'jwt-decode'

function getUser() {
  return decode(getToken())
}

function loggedIn() {
  const token = getToken()
  return token && !isTokenExpired(token) ? true : false
}

function isTokenExpired(token) {
  const decoded = decode(token)
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem('id_token')
    return true
  }
  return false
}

function getToken() {
  console.log('getToken() localstorage token:', localStorage.getItem('id_token'))
  return localStorage.getItem('id_token')
}

function login(idToken) {
  localStorage.setItem('id_token', idToken)
  console.log('login function token', idToken)
  window.location.assign('/')
}

function logout() {
  localStorage.removeItem('id_token')
  window.location.reload()
}

export { getUser, loggedIn, isTokenExpired, getToken, login, logout }