'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctors.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    speciality: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    schedule: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};