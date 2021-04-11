'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Datings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userID: {
                type: Sequelize.STRING,
                references: {
                    model: 'users',
                    key: 'dni'
                }
            },
            doctorID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'doctors',
                    key: 'id'
                }
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            detail: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Datings');
    }
};