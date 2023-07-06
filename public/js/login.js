// REGISTER FUNCTION
const registerBtn = document.getElementById("registerSubmitBtn");

const registerUser = async () => {
  event.preventDefault();

  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (username && password) {
    try {
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
      alert(error.response.data.message);
    }
  }
};

registerBtn.addEventListener("click", registerUser);

// LOGIN FUNCTION

const loginBtn = document.getElementById("loginSubmitBtn");

const loginUser = async () => {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (username && password) {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // Later on when homepage is built, replace alert with updated user info on homepage (username on top right of page instead of 'guest')
        alert("Account Logged In!");
        document.location.replace("/");
      } else {
        alert("Incorrect username or password!");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

loginBtn.addEventListener("click", loginUser);
