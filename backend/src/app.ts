import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";
import { errorHandler } from "./utils/responseHandler";

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(errorHandler);

export default app;
