'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Pet, {foreignKey: 'userId'});
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false},
    lastName: {
      type: DataTypes.STRING,
      allowNull: false},
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {msg: 'Age must be an integer'}
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {msg: 'Must be an email address'}
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};