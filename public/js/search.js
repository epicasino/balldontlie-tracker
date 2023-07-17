const playerSearchForm = document.getElementById("playerSearchBar");

const searchForPlayer = async (event) => {
  event.preventDefault();
  let playerNameInput = document.getElementById("playerNameInput").value;
  playerNameInput = playerNameInput.split(" ").join("%20");

  if (playerNameInput) {
    window.location.replace(`/players/${playerNameInput}`);
  }
};

playerSearchForm.addEventListener("submit", searchForPlayer);

// https://www.balldontlie.io/api/v1/players?search=james%20harden
const teamSearchForm = document.getElementById("teamSearchBar");

const searchForTeam = async (event) => {
  event.preventDefault();
  const teamNameInput = document.getElementById("teamNameInput").value;
  if (teamNameInput) {
    const teamData = await axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then((response) => response.data.data);
    teamData.forEach((team) => {
      if (
        team.name.toLowerCase() === teamNameInput.toLowerCase() ||
        team.full_name.toLowerCase() === teamNameInput.toLowerCase()
      ) {
        window.location.replace(`/teams/${team.id}`)
      }
    });
  }
};

teamSearchForm.addEventListener("submit", searchForTeam);

// teamNameInput
// teamSearchBar
