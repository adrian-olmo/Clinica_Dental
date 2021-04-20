import jwt from "jsonwebtoken";
import database from "../database.js";
import { User } from "../models/user.js";
import dotenv from "dotenv";
import { Dating } from "../models/dating.js";

dotenv.config();

export const userController = {
  login: async (req, res) => {
    try {
      let respuesta = await User.findOne({
        attributes: [
          "dni",
          "name",
          "lastname",
          "phone",
          "history",
          "role",
          "createdAt",
          "updatedAt",
        ],
        where: { dni: req.headers.dni, phone: req.headers.phone },
      });
      if (!respuesta) {
        res.json({ error: "Datos Incorrectos" });
        return;
      }
      const payload = respuesta.dataValues;
      const token = jwt.sign(payload, process.env.SECRET);
      res.json({ auth: token });
    } catch (error) {
      console.log(error);
    }
  },
  logout: (req, res) => {
    try {
      res.send("gracias por elegir Clinica Dental, hasta pronto");
    } catch (error) {
      console.log(error);
    }
  },
  profile: async (req, res) => {
    try {
      let verifyDni = jwt.decode(req.headers.auth, process.env.SECRET);
      let respuesta = await User.findOne({
        attributes: [
          "dni",
          "name",
          "lastname",
          "phone",
          "history",
          "role",
          "createdAt",
          "updatedAt",
        ],
        where: { dni: verifyDni.dni },
      });
      if (!respuesta) {
        res.json(
          { respuesta: `no existe el dni ${verifyDni.dni} en nuestra base de datos` }
        );
        return;
      }
      res.send(respuesta);
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const usuario = await User.findOne({
        attributes: ["dni"],
        where: { dni: req.body.dni },
      });
      if (usuario) {
        res.json({ error: "el DNI del usuario ya existe en la base de datos" });
        return;
      }
      const fecha = new Date();
      let respuesta = await database.query(
        `INSERT INTO users 
                (dni, name, lastname, phone, history, role, createdAt, updatedAt)
                VALUES
                (:dni, :name, :lastname, :phone, :history, :role, :createdAt, :updatedAt)`,
        {
          replacements: {
            dni: req.body.dni,
            name: req.body.name,
            lastname: req.body.lastname,
            phone: req.body.phone,
            history: "vacio",
            role: "user",
            createdAt: fecha.toISOString().slice(0, 10),
            updatedAt: fecha.toISOString().slice(0, 10),
          },
        }
      );
      res.json({ respuesta: respuesta });
    } catch (error) {
      console.log(error);
      res.json({ error: error })
    }
  },
  mydates: async (req, res) => {
    const payload = jwt.decode(req.headers.auth, process.env.SECRET);

    const allDates = await Dating.findAll({ where: { userId: payload.dni } });
    if (allDates != !allDates) res.send(allDates);
    else res.sendStatus(404);
  },
};
