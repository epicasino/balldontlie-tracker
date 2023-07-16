const teamImgEl = document.getElementById("teamImg");
// const playerCardEl = document.querySelectorAll(".playerCard");

const getImg = async () => {
  const teamData = await axios.get(
    `/api/balldontlie/teams/${teamImgEl.dataset.team_id}`
  );
  const teamImg = teamData.data.selectedTeam;
  console.log(teamImg)
  // const teamColors = teamData.data.teamColors;

  // console.log(teamColors);

  // playerCardEl.forEach((element) => {
  //   element.setAttribute(
  //     "style",
  //     `box-shadow: .5rem .5rem 2px 1px ${teamColors.teamMainColor.hex}, -.5rem -.5rem 2px 1px ${teamColors.teamSecondColor.hex};`
  //   );
  // });

  teamImgEl.setAttribute("alt", `Logo: ${teamImg.team_name}`);
  teamImgEl.setAttribute("height", 200);
  teamImgEl.setAttribute("src", teamImg.team_logo);
};

// box-shadow: .5rem .5rem 2px 1px #ff810394, -.5rem -.5rem 2px 1px #ff81032a;

getImg();
