// REGISTER FUNCTION
const registerBtn = document.getElementById("registerSubmitBtn");

const registerUser = async () => {
  event.preventDefault();
  // gets username & password from page
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  // checks if there is a username and password in fields
  if (username && password) {
    try {
      // fetch request to api to create a new user
      const response = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Account Created!");
        document.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
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
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      // if the response comes out okay, alert user and return them to homepage
      if (response.ok) {
        // Later on when homepage is built, replace alert with updated user info on homepage (username on top right of page instead of 'guest')
        alert("Account Logged In!");
        document.location.replace("/");
      } else {
        // else, alert user username or password is incorrect
        alert("Incorrect username or password!");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

loginBtn.addEventListener("click", loginUser);

const logoutBtnEl = document.getElementById("logoutBtn");

logoutBtnEl.addEventListener("click", async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
  });
  console.log(response);
  if (response.ok) {
    alert('Logged out!')
    window.location.replace("/");
  };
});
