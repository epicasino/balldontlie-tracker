const loginStatusEl = document.getElementById("loginStatusBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authLogin = async () => {
  const loginStatus = await fetch("/api/user/auth", {
    method: "POST",
  });

  if (loginStatus.status === 200) {
    const loginUsername = await loginStatus.json();
    console.log(loginStatus);

    loginStatusEl.textContent = loginUsername;
    loginStatusEl.setAttribute("href", "/dashboard");
    loginStatusEl.setAttribute("class", "nav-link border border-warning mx-3");

    logoutBtn.setAttribute("style", "display: relative;");
    logoutBtn.setAttribute("class", "nav-link border border-warning");
    logoutBtn.textContent = "Logout";
  } else if (loginStatus.status === 404) {
    loginStatusEl.textContent = "Login";
    loginStatusEl.setAttribute("href", "/login");
    loginStatusEl.setAttribute("class", "nav-link border border-warning");
    logoutBtn.setAttribute("style", "display:none");
  }
};

authLogin();

const authLogout = async () => {
  const logoutStatus = await axios.post("/api/user/logout");
  if (logoutStatus.status === 200) {
    alert("Logged out!");
    window.location.replace("/");
  }
};

logoutBtn.addEventListener("click", authLogout);
