const deletePlayerBtn = document.getElementById("deletePlayerBtn");

const deletePlayer = async () => {
  const deletedPlayer = await axios.delete(`/api/balldontlie/player/${deletePlayerBtn.dataset.player_id}`);
  
  if (deletedPlayer.status === 200) {
    window.location.reload();
  }
}

deletePlayerBtn.addEventListener('click', deletePlayer)