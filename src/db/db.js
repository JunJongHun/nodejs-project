import mongoose from "mongoose";

mongoose.connect("");

//https://learntutorials.net/ko/node-js/topic/3486/%EB%AA%BD%EA%B5%AC%EC%8A%A4-%EB%8F%84%EC%84%9C%EA%B4%80
// 참고해!
const db = mongoose.connection; // 몽구스 커넥션 객체 생성

// 이벤트에 대한 콜백 함수
const handleError = (error) => {
  console.log(`DB error : ${error}`);
};
const handleConnect = () => {
  console.log("DB Connected!");
};

db.on("error", handleError); // 여러번 가능
db.once("open", handleConnect); // 한번만 가능
