import database from "../database.js";
import { Dating } from "../models/dating.js";

export const datingController = {
    list: async(req, res) => {
        try {
            database.query('SELECT datings.id AS NumCita, datings.date AS FechaCita, users.id AS DNI, users.name AS Paciente, doctors.name AS Doctor, datings.detail AS DetalleCita, datings.`status` AS Estado FROM datings, users, doctors WHERE datings.userID = users.id AND datings.doctorID = doctors.id', { type: database.QueryTypes.SELECT }).then(dating => {
                res.send(dating)
            });
        } catch (error) {
            console.log(error);
        }
    },

    listPro: async(req, res) => {
        try {
            database.query('SELECT * FROM datings WHERE status = "Programada" ', { type: database.QueryTypes.SELECT }).then(dating => {
                res.send(dating)
            });
        } catch (error) {
            console.log(error);
        }
    },

    create: async(req, res) => {
        let respuesta = await Dating.create(req.body);
        res.send('Cita creada con exito');
    },

    update: async(req, res) => {

    }
}