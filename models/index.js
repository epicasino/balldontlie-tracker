const User = require("./User");
const Player = require('./Player');
const Team = require('./Team');

User.hasMany(Player, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Player.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Team, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Team.belongsTo(Player, {
  foreignKey: 'user_id'
})

module.exports = { User, Player, Team };
