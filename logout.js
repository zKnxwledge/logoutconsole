function logout() {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `""`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

logout();
