import { Router } from "express";
import { doctorController } from "../controllers/doctor.controller.js";

const doctorRoutes = Router();

doctorRoutes.get('/', doctorController.list);
doctorRoutes.post('/', doctorController.create);

export default doctorRoutes;