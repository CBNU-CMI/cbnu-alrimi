function inToken() {
  return localStorage.getItem('token') ? 1 : 0;
}
function getToken() {
  return localStorage.getItem('token');
}
function setToken(token) {
  return localStorage.setItem('token', token);
}
export { inToken, getToken, setToken };
