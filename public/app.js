window.callJS = async function (new_token) {
  let token = localStorage.getItem('token');
  if (!token || token != new_token) {
    localStorage.setItem('token', new_token);
    location.reload();
  }
};

window.dialog = [];
window.bfrTime = false;
window.back = function () {
  if (window.dialog.length == 0) {
    if (window.bfrTime) {
      app.close();
    } else {
      app.toast('한번 더 누르면 종료됩니다');
      window.bfrTime = true;
      setTimeout(() => {
        window.bfrTime = false;
      }, 2000);
    }
  } else {
    const ref = window.dialog[window.dialog.length - 1];
    ref.current.closeDialog();
  }
};

if (window.app) app.getToken();
if (window.app) app.confirmNotice();
