import mongoose from "mongoose";

//스키마 정의하기
const { Schema } = mongoose;

const inputSchema = new Schema({
  // input 파일에 대한 스키마 정의하기
  // https://mongoosejs.com/docs/guide.html  이거 참고해

  core: Number,
  name: {         // 중복되지 않도록 unique
    type: String,
    unique: true,
  },
  task: Number,
  value: Number,
});

//모델 정의하기
const inputModel = mongoose.model("inputModel", inputSchema);

//모듈 내보내기
// https://ko.javascript.info/import-export 참고해!
export default inputModel;

const test = new inputModel({ // 모델 생성
  core: 1,
  task: 1,
  value: 1,
  name:"one"
});

test.save() // name이 중복 될 시 오류 메세지 띄우고 새로 저장 안함
  .then(() => {
    console.log("성공");
  })
  .catch((err) => {
    console.log(`이름이 중복되어 추가할 수 없습니다`);
  });