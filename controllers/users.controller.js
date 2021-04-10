import {User} from '../models/user.js';

export const userController = {
    list: async (req,res) => {
        try {
            let respuesta = await User.findAll({
                attributes: ['dni', 'name', 'lastname', 'phone', 'history', 'role', 'createdAt', 'updatedAt']
            });
            res.send(respuesta);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req,res) => {
        try {
            let respuesta = await User.create(req.body);
            res.send(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
}