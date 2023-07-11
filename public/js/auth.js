const loginStatusEl = document.getElementById("loginStatusBtn");

const authLogin = async () => {
  const loginStatus = await axios.post("/api/user/auth");
  console.log(loginStatus);
  if (loginStatus.status === 200) {
    loginStatusEl.textContent = loginStatus.data;
    loginStatusEl.setAttribute('href', '/dashboard');
  } else {
    loginStatus.textContent = 'Login';
    loginStatusEl.setAttribute('href', '/login');
  }
};

authLogin();
