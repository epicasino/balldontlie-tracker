const teamImgEl = document.querySelectorAll("#teamImg");
// const playerCardEl = document.querySelectorAll(".playerCard");

teamImgEl.forEach(async (element) => {
  const teamData = await axios.get(
    `/api/balldontlie/teams/${element.dataset.team_id}`
  );

  const teamImg = teamData.data.selectedTeam;

  element.setAttribute("alt", `Logo: ${teamImg.team_name}`);
  element.setAttribute("height", 200);
  element.setAttribute("src", teamImg.team_logo);
});

// const getImg = async () => {
//   const teamData = await axios.get(
//     `/api/balldontlie/teams/${teamImgEl.dataset.team_id}`
//   );
//   const teamImg = teamData.data.selectedTeam;
//   console.log(teamImg)

//   teamImgEl.setAttribute("alt", `Logo: ${teamImg.team_name}`);
//   teamImgEl.setAttribute("height", 200);
//   teamImgEl.setAttribute("src", teamImg.team_logo);
// };

// box-shadow: .5rem .5rem 2px 1px #ff810394, -.5rem -.5rem 2px 1px #ff81032a;
