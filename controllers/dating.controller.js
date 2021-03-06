import { query } from "express";
import database from "../database.js";
import { Dating } from "../models/dating.js";


export const datingController = {
    list: async (req, res) => {
        try {
            database.query('SELECT datings.id AS id, datings.date AS date, users.dni AS userID, doctors.id AS doctorID, datings.detail AS detail, datings.`status` AS status FROM datings, users, doctors WHERE datings.userID = users.dni AND datings.doctorID = doctors.id', { type: database.QueryTypes.SELECT }).then(dating => {
                res.json(dating)
            });
        } catch (error) {
            console.log({ error: 'error al leer la cita' });
        }
    },

    listPro: async (req, res) => {
        try {
            database.query('SELECT * FROM datings WHERE status = "Programada" ', { type: database.QueryTypes.SELECT }).then(dating => {
                res.send(dating)
            });
        } catch (error) {
            console.log(error);
        }
    },

    create: async (req, res) => {
        try {
            const fecha = new Date();
            let respuesta = await database.query(`INSERT INTO datings 
            (date, userID, doctorID, status, detail, createdAt, updatedAt) 
            VALUES 
            (:date, :userID, :doctorID, :status, :detail, :createdAt, :updatedAt)`,

                {
                    replacements: {
                        id: req.body.id,
                        date: req.body.date,
                        userID: req.body.userID,
                        doctorID: req.body.doctorID,
                        status: "Programada",
                        detail: req.body.detail,
                        createdAt: fecha.toISOString().slice(0, 10),
                        updatedAt: fecha.toISOString().slice(0, 10)
                    }
                }

            );
            res.json({ respuesta: 'Cita creada con exito' });
        } catch (error) {
            console.log(error);
        }
    },

    updatePro: async (req, res) => {

        const id = req.body.id;
        const status = req.body.status;

        try {
            database.query(`UPDATE datings SET status = "${status}" WHERE datings.id = "${id}"`).then(dating => {
                res.send(dating)
            });
        } catch (error) {
            console.log(error);
        }
    }

}