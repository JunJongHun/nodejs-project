import mongoose from "mongoose"; // mongoose 모듈 불러오기
import dotenv from "dotenv"; // 환경변수 불러오기
// https://koonsland.tistory.com/101

dotenv.config(); // 현 디렉토리의 .env 파일 인식하여 환경변수 세팅

mongoose.connect(process.env.DB_URL); // db와 연동

//https://learntutorials.net/ko/node-js/topic/3486/%EB%AA%BD%EA%B5%AC%EC%8A%A4-%EB%8F%84%EC%84%9C%EA%B4%80
// 참고해!
const db = mongoose.connection; // 몽구스 커넥션 객체 생성

// 이벤트에 대한 콜백 함수
const handleError = (error) => {  // 에러 발생 시 출력
  console.log(`DB error : ${error}`);
};
const handleConnect = () => { // 정상 연동 시 출력
  console.log("DB Connected!");
};

db.on("error", handleError); // 여러번 가능
db.once("open", handleConnect); // 한번 만 가능
