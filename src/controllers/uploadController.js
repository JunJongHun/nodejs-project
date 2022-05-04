import path from "path";
import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  // console.log(req.file); // 전달된 파일 정보 확인
  let fileName = req.file.originalname;

  try {
    await inputModel.create({
      name: fileName,
    });

    console.log("DB에 정상 저장");
    let arr = await inputModel.find({});
    console.log("################################");
    console.log(arr);
    console.log("################################");
    return res.sendFile(path.join(__dirname + "./../static/upload.html"));
  } catch (error) {
    console.log(`DB에 이미 있음 : ${error}`);
    return res.redirect("/");
  }
}; //이것도 콜백함수 되것네
