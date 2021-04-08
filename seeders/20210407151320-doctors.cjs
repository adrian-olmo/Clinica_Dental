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
        }, {
            name: 'Marcos',
            lastname: 'Sobrino',
            speciality: 'Limbieza y Blanqueamiento',
            phone: '632-25-80-17',
            schedule: 'Lunes - Sabados (mañanas y tardes)'
        }], {})

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Doctors', null, {})
    }
};