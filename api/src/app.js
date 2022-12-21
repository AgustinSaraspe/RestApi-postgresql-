import express from  "express";
import projectsRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.use(projectsRoutes);
app.use(taskRoutes);
app.use(userRoutes);


export default app;