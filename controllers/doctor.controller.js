import { Doctors } from "../models/doctors.js";


export const doctorController = {
    list: async(req, res) => {
        try {
            let respuesta = await Doctors.findAll();
            res.send(respuesta)
        } catch (error) {
            console.log(error);
        }
    }
}