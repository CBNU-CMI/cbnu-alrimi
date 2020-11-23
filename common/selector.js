function inSelector(type) {
  return localStorage.getItem(type) ? 1 : 0;
}
function getSelector(type) {
  return localStorage.getItem(type);
}
function setSelector(type, selector) {
  return localStorage.setItem(type, selector);
}
export { inSelector, getSelector, setSelector };
