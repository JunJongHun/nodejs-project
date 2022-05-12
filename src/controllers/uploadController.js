import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  let fileName = req.file.originalname;
  try {
    const filter = { name: fileName };
    var update = {
      core: 1,
      task: 2,
      value: 1,
    };
    if (
      await inputModel.findOneAndUpdate(filter, update, {
        upsert: true,
      })
    ) {
      console.log("DB에 업데이트 ");
      return res.render("highChart");
    } else {
      console.log("DB에 새로 저장 ");
      return res.render("highChart");
    }
  } catch (error) {
    console.log(`DB 오류 있음 : ${error}`);

    return res.redirect("/");
  }
};
