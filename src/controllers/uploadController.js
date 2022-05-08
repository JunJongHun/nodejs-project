import path from "path";
import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  console.log(req.file); // 전달된 파일 정보 확인
  let fileName = req.file.originalname;
 
  try {
    const filter = {name: fileName};
    var update = {
      core: 1,
      task: 2,
      value: 1,
    };
    // await inputModel.countDocuments(filter); // filter 데이터베이스 컬렉션에서 일치하는 문서 수를 계산

    // await inputModel.findOneAndUpdate(filter, update, {
    //   new: true,
    //   upsert: true 
    // });

    if (await inputModel.findOneAndUpdate(filter, update, {
      upsert: true 
    })) {
      console.log("DB 업데이트");
      return res.sendFile(path.join(__dirname + "./../static/upload.html"));
    } else {
    console.log("DB에 정상 저장");
    return res.sendFile(path.join(__dirname + "./../static/upload.html"));
    }

  } catch (error) {
    console.log(`DB 오류 발생 : ${error}`);
    return res.sendFile(path.join(__dirname + "./../static/index.html"));
  }
}; 
// 1. 이미 저장되어 있는 파일을 확인을 위해서 코어 값 수정하고 올리면 업데이트 됨
// 2. 파일이 업데이트 될 때 + 새 파일 넣을 때 서버에서 그래프가 안 뜸 (이것도 몽고디비 사이트에서 확인 하면 변경 사항이 저장 됨 새 파일도 저장 됨)
// 3. 콘솔 로그 'db 업데이트'만 출력되고 정상 저장은 출력이 안 됨
