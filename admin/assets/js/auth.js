// Stage 1 prototype only: no real authentication yet.
// This just gates navigation so the internal pages aren't reachable without
// clicking through the login screen first. Stage 2 replaces this with real
// auth once the backend is connected.
function requireLogin() {
  if (sessionStorage.getItem('exd_logged_in') !== 'true') {
    window.location.href = 'login.html';
  }
}
function doLogin() {
  sessionStorage.setItem('exd_logged_in', 'true');
}
function doLogout() {
  sessionStorage.removeItem('exd_logged_in');
  window.location.href = '../';
}
