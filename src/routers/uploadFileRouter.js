import express from "express"; //express모듈로부터 가져옴
import multer from "multer";
import { upload } from "../controllers/uploadController.js"; // uploadcontroller 에 만든 객체 upload를 여기로부터 가져온다

// https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/upload/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

const multerUpload = multer({ storage: storage });
// const multerUpload = multer({ dest: "./src/upload/" });

const uploadFileRouter = express.Router(); //express 라우터 호출

// uploadFileRouter.get("/", upload);       //주어진 URL에 대해 GET 요청에서  /를 실행
uploadFileRouter.post("/", multerUpload.single("userfile"), upload);
export default uploadFileRouter; //exprot default는  한모듈덩 허너
