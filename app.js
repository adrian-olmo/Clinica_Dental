import express from 'express';
import userRoutes from "./routes/users.routes.js";


const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.listen(3000, () =>{
    console.log("servidor conectado en el puerto 3000")
});
