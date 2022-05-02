import express from "express"; //express모듈로부터 가져옴
import multer from "multer";
import { upload } from "../controllers/uploadController.js"; // uploadcontroller 에 만든 객체 upload를 여기로부터 가져온다

const multerUpload = multer({ dest: "./src/upload/" });

const uploadFileRouter = express.Router(); //express 라우터 호출

// uploadFileRouter.get("/", upload);       //주어진 URL에 대해 GET 요청에서  /를 실행
uploadFileRouter.post("/", multerUpload.single("userfile"), upload);
export default uploadFileRouter; //exprot default는  한모듈덩 허너
