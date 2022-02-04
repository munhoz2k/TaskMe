//import { NextFunction, Request, Response } from "express";
import { app } from "./app";
import { router } from "./routes";
import cors from "cors";

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(router);

app.listen(PORT, () => console.log("Server Up"));
