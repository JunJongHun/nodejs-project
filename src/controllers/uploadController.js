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
  console.log(req.body.name);
  console.log(fileName);
  console.log(__dirname);
  let arr;

  let data = [
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
  ];

  try {
    let file_data = fs.readFileSync(
      __dirname + `/../uploads/${fileName}`,
      "utf-8"
    );
    arr = file_data.split(/\s+/);
    arr.shift();
    arr.pop();

    for (let i = arr.length - 1; i >= 0; i--) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (isNaN(Number(arr[i]))) {
          arr.splice(i, 1);
        }
      }
    }

    for (let j = 0; j < 10; j++) {
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
        if (i % 5 === 0) {
          data[parseInt(i / 5)][0].push(newArr[i]);
        }
        if (i % 5 === 1) {
          data[parseInt(i / 5)][1].push(newArr[i]);
        }
        if (i % 5 === 2) {
          data[parseInt(i / 5)][2].push(newArr[i]);
        }
        if (i % 5 === 3) {
          data[parseInt(i / 5)][3].push(newArr[i]);
        }
        if (i % 5 === 4) {
          data[parseInt(i / 5)][4].push(newArr[i]);
        }
      }

      // console.table(arr);
    }

    for (let j = 0; j < 10; j++) {
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
        if (parseInt(i / 5) === 0) {
          data[parseInt(i % 5) + 5][0].push(newArr[i]);
        }
        if (parseInt(i / 5) === 1) {
          data[parseInt(i % 5) + 5][1].push(newArr[i]);
        }
        if (parseInt(i / 5) === 2) {
          data[parseInt(i % 5) + 5][2].push(newArr[i]);
        }
        if (parseInt(i / 5) === 3) {
          data[parseInt(i % 5) + 5][3].push(newArr[i]);
        }
        if (parseInt(i / 5) === 4) {
          data[parseInt(i % 5) + 5][4].push(newArr[i]);
        }
      }

      // console.table(arr);
    }

    // console.table(data[6][0]);
    // console.table(data[6][1]);
    // console.table(data[6][2]);
    // console.table(data[6][3]);
    // console.table(data[6][4]);
    // console.table(data);
  } catch (error) {
    console.log(error);
  }

  try {
    const filter = { name: fileName };
    let update = {
      core1: [
        {
          task1: data[0][0],
          task2: data[0][1],
          task3: data[0][2],
          task4: data[0][3],
          task5: data[0][4],
        },
      ],
      core2: [
        {
          task1: data[1][0],
          task2: data[1][1],
          task3: data[1][2],
          task4: data[1][3],
          task5: data[1][4],
        },
      ],
      core3: [
        {
          task1: data[2][0],
          task2: data[2][1],
          task3: data[2][2],
          task4: data[2][3],
          task5: data[2][4],
        },
      ],
      core4: [
        {
          task1: data[3][0],
          task2: data[3][1],
          task3: data[3][2],
          task4: data[3][3],
          task5: data[3][4],
        },
      ],
      core5: [
        {
          task1: data[4][0],
          task2: data[4][1],
          task3: data[4][2],
          task4: data[4][3],
          task5: data[4][4],
        },
      ],

      task1: [
        {
          core1: data[5][0],
          core2: data[5][1],
          core3: data[5][2],
          core4: data[5][3],
          core5: data[5][4],
        },
      ],
      task2: [
        {
          core1: data[6][0],
          core2: data[6][1],
          core3: data[6][2],
          core4: data[6][3],
          core5: data[6][4],
        },
      ],
      task3: [
        {
          core1: data[7][0],
          core2: data[7][1],
          core3: data[7][2],
          core4: data[7][3],
          core5: data[7][4],
        },
      ],
      task4: [
        {
          core1: data[8][0],
          core2: data[8][1],
          core3: data[8][2],
          core4: data[8][3],
          core5: data[8][4],
        },
      ],
      task5: [
        {
          core1: data[9][0],
          core2: data[9][1],
          core3: data[9][2],
          core4: data[9][3],
          core5: data[9][4],
        },
      ],
    };

    if (await inputModel.findOneAndUpdate(filter, update, { upsert: true })) {
      console.log("DB에 업데이트 ");
      console.log(req.body);
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
