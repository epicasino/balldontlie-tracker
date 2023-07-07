const testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", async () => {
  let addedPlayer = {
    id: 237,
    first_name: "LeBron",
    last_name: "James",
  };

  try {
    const response = await axios.post("/api/balldontlie/save", addedPlayer);
  } catch (err) {
    if (err.code === "ERR_BAD_REQUEST") {
      alert("You need to be logged in!");
      window.location.replace("/login");
    }
    console.log(err);
  }
});

// https://www.balldontlie.io/api/v1/players?search=james%20harden
