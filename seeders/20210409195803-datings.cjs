'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Datings', [{
            date: '2021-04-11',
            userID: '1A',
            doctorID: '1',
            status: 'Programada',
            detail: 'Detalle'
        }, {
            date: '2021-04-09',
            userID: '1b',
            doctorID: '2',
            status: 'Finalizada',
            detail: 'Detalle'
        }, {
            date: '2021-04-11',
            userID: '1A',
            doctorID: '3',
            status: 'Cancelada',
            detail: 'Detalle'
        }], {})

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Datings', null, {})
    }
};