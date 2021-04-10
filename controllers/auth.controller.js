import jwt from "jsonwebtoken";
import database from "../database.js";
import { User } from "../models/user.js";
import dotenv from 'dotenv';

dotenv.config();

/* 
const role = req.headers.role;

        database.query(`SELECT * FROM users WHERE role = '${role}' `, { type: database.QueryTypes.SELECT }).then(users => {
            res.send(users)
        }); */

export const authController = {
    authentication: async(req, res) => {

        try {
            const data = { role: req.headers.role };
            let checkRole = await User.findOne({attributes: ["role"], where: { role: data.role } })

            if (checkRole.role == data.role) {

                const payload = {
                    role: req.headers.role
                }
                const token = jwt.sign(payload, process.env.SECRET)
                res.json({ auth: token });
            } else {
                res.sendStatus(404)
            }
        } catch (error) {
            console.log(error)
        }

    }
}