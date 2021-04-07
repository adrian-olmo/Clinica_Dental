'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Doctors', [{
            name: 'Fernando',
            lastname: 'Moraleda',
            speciality: 'Odontologia',
            phone: '654-15-30-09',
            schedule: 'Martes - Viernes (tardes), Sabados (mañana - tarde)'
        }, {
            name: 'Carlos',
            lastname: 'Fernandez',
            speciality: 'Implantes Dentales',
            phone: '722-29-85-50',
            schedule: 'Lunes - Sabados (tardes)'
        }], {})

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Doctors', null, {})
    }
};