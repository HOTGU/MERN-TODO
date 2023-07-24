import express from "express";
import cors from "cors";

import apiRouter from "./routes/apiRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(5000, (req, res) => console.log("server on "));
