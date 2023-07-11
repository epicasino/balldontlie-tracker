const loginStatusEl = document.getElementById("loginStatusBtn");
const logoutBtn = document.getElementById("logoutBtn");
const authLogin = async () => {
  const loginStatus = await axios.post("/api/user/auth");
  console.log(loginStatus);
  if (loginStatus.status === 404) {
    logoutBtn.textContent = "";
  }

  if (loginStatus.status === 200) {
    loginStatusEl.textContent = loginStatus.data;
    loginStatusEl.setAttribute("href", "/dashboard");
    logoutBtn.textContent = "Logout";
  }
};

// const check = () => {
//     if (loginStatusEl.textContent !== 'Login') {
//         authLogin();
//     } else {
//     }
// };

// check();
authLogin();

const authLogout = async () => {
  const logoutStatus = await axios.post("/api/user/logout");
  if (logoutStatus.status === 200) {
    logoutBtn.setAttribute("href", "/");
    logoutBtn.textContent = "";
    loginStatusEl.textContent = "Login";
    alert("Logged out!");
    window.location.replace("/");
  }
};

logoutBtn.addEventListener("click", authLogout);
