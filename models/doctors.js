'use strict';
import pkg from "sequelize";
import database from "../database.js";
import dating from "./dating.js";

const { Model, DataTypes } = pkg;

export class Doctors extends Model {
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
    phone: DataTypes.STRING,
    schedule: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Doctors',
});

Doctors.hasMany(dating, { foreignKey: 'doctorID' });