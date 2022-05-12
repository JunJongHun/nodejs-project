import mongoose from "mongoose";

//스키마 정의하기
const { Schema } = mongoose;

const inputSchema = new Schema({
  // input 파일에 대한 스키마 정의하기
  // https://mongoosejs.com/docs/guide.html  이거 참고해
  name: String,
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
