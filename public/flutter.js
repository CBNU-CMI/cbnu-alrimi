/* eslint-disable no-undef */
// setTimeout(() => {
//   alert("asf");
//   Flutter.postMessage("Hello World being called from Javascript code");
// }, 3000);

window.back = () => {
  const ref = window.dialog[window.dialog.length - 1];
  ref.current.closeDialog();
};
