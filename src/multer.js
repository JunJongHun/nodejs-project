import multer from "multer";

// const multerUpload = multer({ dest: "./src/upload/" });
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});
let multerUpload = multer({ storage: storage });

export default multerUpload;
