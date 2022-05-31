import mongoose from "mongoose";  // 몽구스 모듈 불러오기

//스키마 정의
const { Schema } = mongoose;

const inputSchema = new Schema({
  // input 파일에 대한 스키마 정의
  // https://mongoosejs.com/docs/guide.html  이거 참고해
  name: String, // 업로드하는 파일 이름을 String 형식으로 저장

  // 각각 core와 task별로 해당 값들을 이중 배열 형식으로 저장
  core1: [
    {
      task1: [Number],
      task2: [Number],
      task3: [Number],
      task4: [Number],
      task5: [Number],
    },
  ],
  core2: [
    {
      task1: [Number],
      task2: [Number],
      task3: [Number],
      task4: [Number],
      task5: [Number],
    },
  ],
  core3: [
    {
      task1: [Number],
      task2: [Number],
      task3: [Number],
      task4: [Number],
      task5: [Number],
    },
  ],
  core4: [
    {
      task1: [Number],
      task2: [Number],
      task3: [Number],
      task4: [Number],
      task5: [Number],
    },
  ],
  core5: [
    {
      task1: [Number],
      task2: [Number],
      task3: [Number],
      task4: [Number],
      task5: [Number],
    },
  ],

  task1: [
    {
      core1: [Number],
      core2: [Number],
      core3: [Number],
      core4: [Number],
      core5: [Number],
    },
  ],
  task2: [
    {
      core1: [Number],
      core2: [Number],
      core3: [Number],
      core4: [Number],
      core5: [Number],
    },
  ],
  task3: [
    {
      core1: [Number],
      core2: [Number],
      core3: [Number],
      core4: [Number],
      core5: [Number],
    },
  ],
  task4: [
    {
      core1: [Number],
      core2: [Number],
      core3: [Number],
      core4: [Number],
      core5: [Number],
    },
  ],
  task5: [
    {
      core1: [Number],
      core2: [Number],
      core3: [Number],
      core4: [Number],
      core5: [Number],
    },
  ],
});

//모델 정의하기
const inputModel = mongoose.model("inputModel", inputSchema);

//모듈 내보내기
// https://ko.javascript.info/import-export 참고해!
export default inputModel;
