const resultsContainerEl = document.getElementById("resultsContainer");

resultsContainerEl.addEventListener("click", async (event) => {
  if (event.target.getAttribute("id") === "savePlayerBtn") {
    try {
      const savedPlayer = await axios.post("/api/balldontlie/save", {
        id: event.target.dataset.player_id,
        first_name: event.target.dataset.first_name,
        last_name: event.target.dataset.last_name,
      });
      alert("Player saved!");
      window.location.replace("/");
    } catch (err) {
      if (err.response.status === 400) {
        alert("You need to be logged in!");
        window.location.replace("/login");
      }
    }
  }
});
