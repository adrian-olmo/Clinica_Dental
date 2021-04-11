import jwt from "jsonwebtoken";
import database from "../database.js";
import { User } from "../models/user.js";
import dotenv from 'dotenv';

dotenv.config();

export const userController = {
    login: async (req,res) => {
        try {
            let respuesta = await User.findOne({
                attributes: ['dni', 'name', 'lastname', 'phone', 'history', 'role', 'createdAt', 'updatedAt'],
                where: {dni: req.headers.dni, phone: req.headers.phone}
            });
            if (!respuesta){
                res.send("Datos incorrectos");
                return;
            }
            const payload = respuesta.dataValues;
            const token = jwt.sign(payload, process.env.SECRET);
            res.json({ auth: token });
        } catch (error) {
            console.log(error);
        }
    },
    logout: (req,res) => {
        try {
            res.send("gracias por elegir Clinica Dental, hasta pronto");
        } catch (error) {
            console.log(error);
        }
    },
    profile: async (req,res) => {
        try {
            let respuesta = await User.findAll({
                attributes: ['dni', 'name', 'lastname', 'phone', 'history', 'role', 'createdAt', 'updatedAt'],
                where: {dni: req.headers.dni}
            });
            if (!respuesta){
                res.send(`no existe el dni ${req.headers.dni} en nuestra base de datos`);
                return;
            }
            res.send(respuesta);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req,res) => {
        try {
            const usuario= await User.findOne({attributes: ["dni"], where: {dni: req.body.dni}});
            if (usuario){
                res.send("el DNI del usuario ya existe en la base de datos");
                return;
            }
            const fecha = new Date();
            let respuesta = await database.query(
                `INSERT INTO users 
                (dni, name, lastname, phone, history, role, createdAt, updatedAt)
                VALUES
                (:dni, :name, :lastname, :phone, :history, :role, :createdAt, :updatedAt)`,
                {
                    replacements:
                    {dni: req.body.dni,
                    name: req.body.name,
                    lastname: req.body.lastname,
                    phone: req.body.phone,
                    history: req.body.history,
                    role: "user",
                    createdAt: fecha.toISOString().slice(0, 10),
                    updatedAt: fecha.toISOString().slice(0, 10)}
            });
            res.send(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
}