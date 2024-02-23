import { jwtDecode } from 'jwt-decode'

function getUser() {
  return jwtDecode(getToken())
}

function loggedIn() {
  const token = getToken()
  return token && !isTokenExpired(token)
}

function isTokenExpired(token) {
  const decoded = jwtDecode(token)
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem('id_token')
    return true
  }
  return false
}

function getToken() {
  return localStorage.getItem('id_token')
}

function login(idToken) {
  localStorage.setItem('id_token', idToken)
  window.location.assign('/')
}

function logout() {
  localStorage.removeItem('id_token')
  window.location.reload()
}

export { getUser, loggedIn, isTokenExpired, getToken, login, logout }
