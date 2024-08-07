import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import { initialize } from "./config/dbConfig";
import activityRoutes from "./routes/activityRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(helmet());

// Routes
app.use("/api/activities", activityRoutes);

app.use(errorHandler);

initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log("TypeORM connection error: ", error));

export { app };
