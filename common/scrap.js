function getScrap() {
  const scrap = JSON.parse(localStorage.getItem('saved'));
  if (scrap) return scrap;
  else return [];
}
function insertScrap(notice_id) {
  if (!isScrap(notice_id)) {
    let scrap = getScrap();
    scrap.push(notice_id);
    localStorage.setItem('saved', JSON.stringify(scrap));
  }
}
function isScrap(notice_id) {
  const scrap = getScrap();
  return scrap.includes(notice_id) ? true : false;
}
function removeScrap(notice_id) {
  let scrap = getScrap();
  const idx = scrap.indexOf(notice_id);
  if (idx > -1) scrap.splice(idx, 1);
  localStorage.setItem('saved', JSON.stringify(scrap));

}
function isEmptyScrap() {
  if (getScrap().length == 0) return true;
  else return false;
}

export { getScrap, insertScrap, isScrap, removeScrap, isEmptyScrap };
