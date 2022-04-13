import express from "express";
import { upload } from "../controllers/uploadController.js";

const uploadFileRouter = express.Router();

uploadFileRouter.get("/", upload);

export default uploadFileRouter;
