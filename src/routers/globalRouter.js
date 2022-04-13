import express from "express";
import { main } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", main);

export default globalRouter;
