'use strict';
import pkg from "sequelize";
import database from "../database.js";
import { Dating } from "./dating.js";

const { Model, DataTypes } = pkg;

export class User extends Model {};

User.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    history: DataTypes.STRING,
    role: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize: database,
    modelName: 'User',
});

User.hasMany(Dating, { foreignKey: 'userID' });