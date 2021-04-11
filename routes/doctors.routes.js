import { Router } from "express";
import { doctorController } from "../controllers/doctor.controller.js";

const doctorRoutes = Router();

doctorRoutes.get('/', doctorController.list);

export default doctorRoutes;