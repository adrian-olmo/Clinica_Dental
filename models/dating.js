'use strict';
import pkg from "sequelize";
import database from "../database.js";


const { Model, DataTypes } = pkg;

export class Dating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
};
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