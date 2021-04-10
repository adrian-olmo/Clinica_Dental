'use strict';
import pkg from "sequelize";
import database from "../database.js";


const { Model, DataTypes } = pkg;

export class Dating extends Model {};

Dating.init({
    date: DataTypes.DATE,
    userID: DataTypes.STRING,
    doctorID: DataTypes.INTEGER,
    status: DataTypes.STRING,
    detail: DataTypes.STRING
}, {
    sequelize: database,
    modelName: 'Dating',
});