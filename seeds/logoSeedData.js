const {Team} = require('../models');
const sequelize = require('../config');

const teamSeeds =
[ 
  {
    team_id: 1,
    team_name: "ATL", 
    team_logo:  "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg"
  },
  {
    team_id: 2,
    team_name: "BOS",
    team_logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
  },
  {
    team_id: 3,
    team_name: "BKN",
    team_logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg"
  },
  {
    team_id: 4,
    team_name: "CHA",
    team_logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg"
  },
  {
    team_id: 5,
    team_name: "CHI",
    team_logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg"
  },
  {
    team_id: 6,
    team_name: "CLE",
    team_logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg"
  },
  {
    team_id: 7,
    team_name: "DAL",
    team_logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg"
  },
  {
    team_id: 8,
    team_name: "DEN",
    team_logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg"
  },
  {
    team_id: 9,
    team_name: "DET",
    team_logo: "ttps://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg"
  },
  {
    team_id: 10,
    team_name: "GSW",
    team_logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
  },
  {
    team_id: 11,
    team_name: "HOU",
    team_logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg"
  },
  {
    team_id: 12,
    team_name: "IND",
    team_logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg"
  },
  {
    team_id: 13,
    team_name: "LAC",
    team_logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg"
  },
  {
    team_id: 14,
    team_name: "LAL",
    team_logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
  },
  {
    team_id: 15,
    team_name: "MEM",
    team_logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg"
  },
  {
    team_id: 16,
    team_name: "MIA",
    team_logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg"
  },
  {
    team_id: 17,
    team_name: "MIL",
    team_logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg"
  },
  {
    team_id: 18,
    team_name: "MIN",
    team_logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg"
  },
  {
    team_id: 19,
    team_name: "NOP",
    team_logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg"
  },
  {
    team_id: 20,
    team_name: "NYK",
    team_logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg"
  },
  {
    team_id: 21,
    team_name: "OKC",
    team_logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg"
  },
  {
    team_id: 22,
    team_name: "ORL",
    team_logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg"
  },
  {
    team_id: 23,
    team_name: "PHI",
    team_logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg"
  },
  {
    team_id: 24,
    team_name: "PHX",
    team_logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg"
  },
  {
    team_id: 25,
    team_name: "POR",
    team_logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg"
  },
  {
    team_id: 26,
    team_name: "SAC",
    team_logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg"
  },
  {
    team_id: 27,
    team_name: "SAS",
    team_logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg"
  },
  {
    team_id: 28,
    team_name: "TOR",
    team_logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg"
  },
  {
    team_id: 29,
    team_name: "UTA",
    team_logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg"
  },
  {
    team_id: 30,
    team_name: "WAS",
    team_logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg"
  },
]
const seededData = async () => {
  await sequelize.sync({force: true })
  await Team.bulkCreate(teamSeeds)
}

seededData();
