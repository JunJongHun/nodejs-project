import path from "path";
import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  // console.log(req.file); // 전달된 파일 정보 확인

  // const test = new inputModel({
  //   // 모델에 실질적인 값 넣기
  //   core: 1,
  //   task: 1,
  //   value: 1,
  //   name: "one",
  // });

  // test
  //   .save() // name이 중복 될 시 오류 메세지 띄우고 새로 저장 안함
  //   .then(() => {
  //     console.log("성공");
  //   })
  //   .catch((err) => {
  //     console.log(`이름이 중복되어 추가할 수 없습니다`);
  //   });

  try {
    await inputModel.create({
      core: 1,
      task: 1,
      value: 1,
      name: "tne",
    });
    console.log("DB에 정상 저장");
    return res.sendFile(path.join(__dirname + "./../static/upload.html"));
  } catch (error) {
    console.log(`DB에 이미 있음 : ${error}`);
    return res.sendFile(path.join(__dirname + "./../static/index.html"));
  }
}; //이것도 콜백함수 되것네
