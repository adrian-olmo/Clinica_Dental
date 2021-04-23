import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';
import checkJwt from '../middleware/checkJwt.js';

const userRoutes = Router();

userRoutes.get("/", userController.login);
userRoutes.get("/profile", userController.profile);
userRoutes.get("/logout", userController.logout);
userRoutes.post("/", userController.create);
userRoutes.get("/mydates", userController.mydates)

export default userRoutes;