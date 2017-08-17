'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});

  User.associate = function(models){
    User.hasMany(models.Characters, {

      foreignKey: 'userID'
    }),
    User.belongsToMany(models.Games, {

      through: 'GamesJoin',
      foreignKey: 'userID',
    })
  }

  return User;
};
