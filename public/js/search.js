const playerSearchBtn = document.getElementById("playerNameSubmitBtn");

const searchForPlayer = async (event) => {
  event.preventDefault();
  const playerName = document.getElementById("playerNameInput").value;
  const joinedName = playerName.split(" ").join("%20");
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?search=${joinedName}`
  ).then((res) => res.json());
  const playerData = response.data;
  const resultsBoxEl = document.getElementById("results");
  playerData.forEach((player) => {
    const playerEl = document.createElement("p");
    playerEl.setAttribute('data-player_id', player.id)
    playerEl.textContent = `${player.first_name} ${player.last_name}`;
    resultsBoxEl.appendChild(playerEl);
  });
};

playerSearchBtn.addEventListener("click", searchForPlayer);
