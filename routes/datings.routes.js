import { Router } from 'express';
import { datingController } from '../controllers/dating.controller.js';


const datingRoutes = Router();

datingRoutes.get('/', datingController.list);
datingRoutes.get('/pro', datingController.listPro);
datingRoutes.post('/', datingController.create);
datingRoutes.patch('/', datingController.updatePro);

export default datingRoutes;