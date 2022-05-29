// 서버
import "./db/db.js"; // DB 연결 파일 import
import "./db/schema/input.js"; // input 스키마, 모델 import
import express from "express"; //express모듈 불러옴
import globalRouter from "./routers/globalRouter.js"; //glovbalRouter 불러옴
import uploadFileRouter from "./routers/uploadFileRouter.js"; //uploda라우터 불러옴
import path from "path";
import morgan from "morgan";

const PORT = 4002; // 딱 한번만 선언가능한 const

const app = express(); // 객체 app 이 express를 호출

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
console.log(path.join(__dirname, "views")); //경로 확인

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter); //globalRouter로 이동 , 주소에 /치면 이동  ----- app.use 는 미들웨이 그니까 라우터처럼 중간단계로 거쳐가는 역할
app.use("/uploadFile", uploadFileRouter); // uploadFile치면 또 저쪽 라우터파일로가서 콘트롤로 간다 ----------upload로 갑오자

const handleListening = () => {
  console.log(`site : http://localhost:${PORT}`); // 출력이용
};

app.listen(PORT, handleListening); // 콜백 함수로 위에 hamdlelistening으로 가서 저거 가동        port 번호=4000  그리고 handlelistening callback 함수를 받는다
