import path from "path";
import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  console.log(req.file); // 전달된 파일 정보 확인
  let fileName = req.file.originalname;
 
  try {
    await inputModel.create({
      core: 1,
      task: 1,
      value: 1,
      name: fileName,
    });
    console.log("DB에 정상 저장");
    return res.sendFile(path.join(__dirname + "./../static/upload.html"));
  } catch (error) {
    console.log(`DB에 이미 있음 : ${error}`);
    return res.sendFile(path.join(__dirname + "./../static/index.html"));
  }
};