const playerSearchBtn = document.getElementById("playerNameSubmitBtn");

const searchForPlayer = async (event) => {
  event.preventDefault();
  const playerName = document.getElementById("playerNameInput").value;
  const joinedName = playerName.split(" ").join("%20");
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?search=${joinedName}`
  ).then((res) => res.json());
  const playerData = response.data;
  console.log(playerData);
};

playerSearchBtn.addEventListener("click", searchForPlayer);
