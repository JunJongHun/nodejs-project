import path from "path";
import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  // console.log(req.file); // 전달된 파일 정보 확인

  // 지민이랑 효진이가 한거 잘했고, 이 방식은
  // 모델에 데이터 값을 넣어주고(아직 DB에 안들어간 상태)
  // 그 다음 save()를 통해서 DB에 저장하는 방식이고, then()을 이용해 동기식으로 작동하는 방식이야

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

  // async await 방식을 사용해서 동기식으로 작동하는건 똑같고,
  // create()를 사용하면 생성과 동시에 DB에 데이터가 전달이 돼!
  // 이 방식이 더 깔끔하니까 이 방식으로 하면 될 것 같아
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
