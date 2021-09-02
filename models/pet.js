'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model { /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // define association here
      models.Pet.belongsTo(models.User, {foreignKey: 'userId'});
      models.Pet.belongsToMany(models.Toy, {
        through: 'PetsToys',
        foreignKey: 'petId'
      });
    }
  };
  Pet.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.STRING
  }, {sequelize, modelName: 'Pet'});
  return Pet;
};
