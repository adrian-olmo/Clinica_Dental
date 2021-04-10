import express from 'express';
import datingRoutes from './routes/datings.routes.js';
import userRoutes from "./routes/users.routes.js";


const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/datings', datingRoutes);

app.listen(3000, () => {
    console.log("servidor conectado en el puerto 3000")
});