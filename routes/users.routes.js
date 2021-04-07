import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';

const userRoutes = Router();

userRoutes.get("/", userController.list);
userRoutes.post("/", userController.create);

export default userRoutes;