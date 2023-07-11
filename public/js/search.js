const playerSearchForm = document.getElementById("playerSearchBar");

const searchForPlayer = async (event) => {
  event.preventDefault();
  let playerNameInput = document.getElementById("playerNameInput").value;
  playerNameInput = playerNameInput.split(" ").join("%20");

  if (playerNameInput) {
    window.location.replace(`/search/${playerNameInput}`);
  }
};

playerSearchForm.addEventListener("submit", searchForPlayer);

// https://www.balldontlie.io/api/v1/players?search=james%20harden
