import express from "express";
import dotenv from "dotenv";

//Routes
import datingRoutes from "./routes/datings.routes.js";
import userRoutes from "./routes/users.routes.js";
import doctorRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";

//MiddleWare
import checkJwt from "./middleware/checkJwt.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/datings", datingRoutes);
app.use("/doctors", checkJwt, doctorRoutes);

app.listen(5000, () => {
  console.log("servidor conectado en el puerto 5000");
});
