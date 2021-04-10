import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


export const authController = {
    authentication: async(req, res) => {

        try {

            const data = { role: req.headers.role };
            let checkRole = await User.findOne({ attributes: ['role'], where: { role: data.role } })

            if (checkRole.role == data.role && data.role == 'administrador') {

                const payload = {
                    role: req.headers.role
                }
                const auth = jwt.sign(payload, process.env.TOKEN)
                res.json({ auth: auth });


            } else {
                res.sendStatus(401)
            }

        } catch (error) {
            res.status(401);
        }



    }

}