'use strict';
import pkg from "sequelize";
import database from "../database.js";
import dating from "./dating.js";

const { Model, DataTypes } = pkg;

export class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
};
User.init({
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

User.hasMany(dating, { foreignKey: 'userID' });