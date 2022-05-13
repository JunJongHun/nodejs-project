import inputModel from "../db/schema/input"; // 모델 가져옴
import fs from "fs";

const showGraph = (number) => {
  switch (number) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;

    case 3:
      console.log(3);
      break;

    case 4:
      console.log(4);
      break;

    case 5:
      console.log(5);
      break;

    case 6:
      console.log(6);
      break;

    case 7:
      console.log(7);
      break;

    case 8:
      console.log(8);
      break;

    case 9:
      console.log(9);
      break;

    case 10:
      console.log(10);
      break;

    default:
      break;
  }
};

export const upload = async (req, res, next) => {
  let fileName = req.file.originalname;
  console.log(fileName);
  console.log(__dirname);
  let arr;
  try {
    let file_data = fs.readFileSync(
      __dirname + `/../uploads/${fileName}`,
      "utf-8"
    );
    arr = file_data.split(/\s+/);
    arr.shift();
    arr.pop();

    for (let i = arr.length - 1; i >= 0; i--) {
      if (isNaN(Number(arr[i]))) {
        arr.splice(i, 1);
      }
    }
    for (let i = 0; i < arr.length; i += 25) {
      console.log(arr[i]);
    }
    console.table(arr);
  } catch (error) {
    console.log(error);
  }

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
      return res.render("highChart", {
        pageTitle: "highChart",
        showGraph: showGraph,
      });
    } else {
      console.log("DB에 새로 저장");
      return res.render("highChart", {
        pageTitle: "highChart",
        showGraph: showGraph,
      });
    }
  } catch (error) {
    console.log(`DB 오류 있음 : ${error}`);
    return res.redirect("/");
  }
};
