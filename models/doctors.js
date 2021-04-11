'use strict';
import pkg from "sequelize";
import database from "../database.js";
import { Dating } from "./dating.js";

const { Model, DataTypes } = pkg;

export class Doctors extends Model {};

Doctors.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    speciality: DataTypes.STRING,
    phone: DataTypes.STRING,
    schedule: DataTypes.STRING
}, {
    sequelize: database,
    modelName: 'Doctors',
});