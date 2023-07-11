const playerTeamImgEl = document.getElementById('playerTeamImg');

const getImg = async () => {
  const teamData = await axios.get(`/api/balldontlie/teams/${playerTeamImgEl.dataset.team_id}`);
  
  const teamImg = teamData.data.selectedTeam

  // console.log(teamImg);
  playerTeamImgEl.setAttribute('alt', `Logo: ${teamImg.team_name}`);
  playerTeamImgEl.setAttribute('height', 200);
  playerTeamImgEl.setAttribute('src', teamImg.team_logo);
};

getImg();