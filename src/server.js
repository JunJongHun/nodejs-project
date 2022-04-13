// 서버

import express from "express";
import globalRouter from "./routers/globalRouter.js";
import uploadFileRouter from "./routers/uploadFileRouter.js";

const PORT = 4000;

const app = express();

app.use("/", globalRouter);
app.use("/uploadFile", uploadFileRouter);

const handleListening = () => {
  console.log(`site : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
