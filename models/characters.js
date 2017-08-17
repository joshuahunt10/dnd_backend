'use strict';
module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define('Characters', {
    charName: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING
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
