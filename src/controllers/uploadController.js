import inputModel from "../db/schema/input"; // 모델 가져옴

export const upload = async (req, res, next) => {
  let fileName = req.file.originalname;
  try {
    const filter = { name: fileName };
    let update = {
      core1: [
        {
          task1: [1, 2, 3, 4, 5],
          task2: [1, 2, 3, 4, 5],
          task3: [1, 2, 3, 4, 5],
          task4: [1, 2, 3, 4, 5],
          task5: [1, 2, 3, 4, 5],
        },
      ],
      core2: [
        {
          task1: [1, 2, 3, 4, 5],
          task2: [1, 2, 3, 4, 5],
          task3: [1, 2, 3, 4, 5],
          task4: [1, 2, 3, 4, 5],
          task5: [1, 2, 3, 4, 5],
        },
      ],
      core3: [
        {
          task1: [1, 2, 3, 4, 5],
          task2: [1, 2, 3, 4, 5],
          task3: [1, 2, 3, 4, 5],
          task4: [1, 2, 3, 4, 5],
          task5: [1, 2, 3, 4, 5],
        },
      ],
      core4: [
        {
          task1: [1, 2, 3, 4, 5],
          task2: [1, 2, 3, 4, 5],
          task3: [1, 2, 3, 4, 5],
          task4: [1, 2, 3, 4, 5],
          task5: [1, 2, 3, 4, 5],
        },
      ],
      core5: [
        {
          task1: [1, 2, 3, 4, 5],
          task2: [1, 2, 3, 4, 5],
          task3: [1, 2, 3, 4, 5],
          task4: [1, 2, 3, 4, 5],
          task5: [1, 2, 3, 4, 5],
        },
      ],

      task1: [
        {
          core1: [1, 2, 3, 4, 5],
          core2: [1, 2, 3, 4, 5],
          core3: [1, 2, 3, 4, 5],
          core4: [1, 2, 3, 4, 5],
          core5: [1, 2, 3, 4, 5],
        },
      ],
      task2: [
        {
          core1: [1, 2, 3, 4, 5],
          core2: [1, 2, 3, 4, 5],
          core3: [1, 2, 3, 4, 5],
          core4: [1, 2, 3, 4, 5],
          core5: [1, 2, 3, 4, 5],
        },
      ],
      task3: [
        {
          core1: [1, 2, 3, 4, 5],
          core2: [1, 2, 3, 4, 5],
          core3: [1, 2, 3, 4, 5],
          core4: [1, 2, 3, 4, 5],
          core5: [1, 2, 3, 4, 5],
        },
      ],
      task4: [
        {
          core1: [1, 2, 3, 4, 5],
          core2: [1, 2, 3, 4, 5],
          core3: [1, 2, 3, 4, 5],
          core4: [1, 2, 3, 4, 5],
          core5: [1, 2, 3, 4, 5],
        },
      ],
      task5: [
        {
          core1: [1, 2, 3, 4, 5],
          core2: [1, 2, 3, 4, 5],
          core3: [1, 2, 3, 4, 5],
          core4: [1, 2, 3, 4, 5],
          core5: [1, 2, 3, 4, 5],
        },
      ],
    };

    if (await inputModel.findOneAndUpdate(filter, update, { upsert: true })) {
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
