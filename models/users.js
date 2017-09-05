'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});

  Users.associate = function(models){
    Users.hasMany(models.Characters)
    // Users.belongsToMany(models.Games, {through: models.Characters})
  }

  return Users;
};
