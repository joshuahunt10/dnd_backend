'use strict';
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define('Characters', {
    charName: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    con: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    skillProf: DataTypes.ARRAY(DataTypes.STRING),
    subClass: DataTypes.STRING,
    subRace: DataTypes.STRING,
    alignment: DataTypes.STRING,
    background: DataTypes.STRING,
    level: DataTypes.INTEGER,
  }, {});

  Characters.associate = function(models){
    Characters.belongsTo(models.User, {
      foreignKey: 'userID'
    })
    Characters.belongsToMany(models.Games, {

      through: "GamesJoin",
      foreignKey: "charID",
      otherKey: 'charID' //if deleted the query for user not work
    })
  }
  return Characters;
};
