import database from "../database.js";
import { Dating } from "../models/dating.js";
import {User, Doctors} from "../models/index.js";


export const datingController = {
    list: async(req, res) => {
        try {
            database.query('SELECT datings.id AS NumCita, datings.date AS FechaCita, users.dni AS DNI, users.name AS Paciente, doctors.name AS Doctor, datings.detail AS DetalleCita, datings.`status` AS Estado FROM datings, users, doctors WHERE datings.userID = users.dni AND datings.doctorID = doctors.id', { type: database.QueryTypes.SELECT }).then(dating => {
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
        await Dating.create(req.body);
        res.send('Cita creada con exito');
    },

    updatePro: async(req, res) => {

        const id = req.body.id;
        const status = req.body.status;

        try {
            database.query(`UPDATE datings SET status = "${status}" WHERE datings.id = "${id}"`).then(dating => {
                res.send(dating)
            });
        } catch (error) {
            console.log(error);
        }
    },

    updateFin: async(req, res) => {

    }


}