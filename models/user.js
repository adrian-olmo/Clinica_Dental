'use strict';
import pkg from 'sequelize';
import database  from "../database.js";

const { Model, DataTypes } = pkg;

export class User extends Model {
  static associate(models) {
    // define association here
  }
};

User.init({
  name: DataTypes.STRING,
  lastname: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  history: DataTypes.INTEGER,
  role: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
  modelName: "User",
  sequelize: database,
});
