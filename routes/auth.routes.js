import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post('/', authController.authentication);

export default authRoutes;