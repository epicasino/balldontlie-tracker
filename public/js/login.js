// REGISTER FUNCTION
const registerBtn = document.getElementById("registerSubmitBtn");

const registerUser = async () => {
  event.preventDefault();
  // gets username & password from page
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  // checks if there is a username and password in fields
  if (username && password) {
    const response = await axios.post("/api/user/", {
      username,
      password,
    });
    if (response.statusText === "OK") {
      alert("Account Created!");
      document.location.replace("/");
    } else if (response.status === 500) {
      alert("Jeff");
      console.log(response);
    }
  } else {
    alert("Username or Password field blank");
  }
};

registerBtn.addEventListener("click", registerUser);

// LOGIN FUNCTION

const loginBtn = document.getElementById("loginSubmitBtn");

const loginUser = async () => {
  event.preventDefault();
  // gets username & password from page
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // checks if there is a username and password in fields
  if (username && password) {
    const response = await axios.post("/api/user/login", {
      username,
      password,
    });
    // if the response comes out okay, alert user and return them to homepage
    if (response.status === 200) {
      // Later on when homepage is built, replace alert with updated user info on homepage (username on top right of page instead of 'guest')
      alert("Account Logged In!");
      document.location.replace("/");
    } else if (response.status === 400) {
      // else, alert user username or password is incorrect
      alert("Incorrect username or password!");
    }
  }
};

loginBtn.addEventListener("click", loginUser);

const logoutBtnEl = document.getElementById("logoutBtn");

logoutBtnEl.addEventListener("click", async () => {
  const response = await axios.post("/api/user/logout");
  if (response.status === 200) {
    alert("Logged out!");
    window.location.replace("/");
  }
});
