const testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", async () => {
  let addedPlayer = {
    id: 237,
    first_name: "LeBron",
    last_name: "James",
    team_name: "Los Angeles Lakers",
  };
  const response = await fetch("/api/balldontlie/save", {
    method: "POST",
    body: JSON.stringify(addedPlayer),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    window.location.replace("/login");
  }

  console.log(response);
});

// https://www.balldontlie.io/api/v1/players?search=james%20harden