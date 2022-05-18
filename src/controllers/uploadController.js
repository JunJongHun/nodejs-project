import inputModel from "../db/schema/input"; // 모델 가져옴
import fs from "fs";

export const upload = async (req, res, next) => {
  let fileName = req.file.originalname;
  console.log(req.body.name);
  console.log(fileName);
  console.log(__dirname);
  let arr;
<<<<<<< HEAD
  let taskCoreBox = [
=======

  let data = [
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
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
<<<<<<< HEAD
=======

>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
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
<<<<<<< HEAD
      }
    }

    for (let j = 0; j < 10; j++) {
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
        if (i % 5 === 0) {
          taskCoreBox[parseInt(i / 5)][0].push(newArr[i]);
        }
        if (i % 5 === 1) {
          taskCoreBox[parseInt(i / 5)][1].push(newArr[i]);
        }
        if (i % 5 === 2) {
          taskCoreBox[parseInt(i / 5)][2].push(newArr[i]);
        }
        if (i % 5 === 3) {
          taskCoreBox[parseInt(i / 5)][3].push(newArr[i]);
        }
        if (i % 5 === 4) {
          taskCoreBox[parseInt(i / 5)][4].push(newArr[i]);
        }
=======
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
      }

      // console.table(arr);
    }

    for (let j = 0; j < 10; j++) {
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
<<<<<<< HEAD
        if (parseInt(i / 5) === 0) {
          taskCoreBox[parseInt(i % 5) + 5][0].push(newArr[i]);
        }
        if (parseInt(i / 5) === 1) {
          taskCoreBox[parseInt(i % 5) + 5][1].push(newArr[i]);
        }
        if (parseInt(i / 5) === 2) {
          taskCoreBox[parseInt(i % 5) + 5][2].push(newArr[i]);
        }
        if (parseInt(i / 5) === 3) {
          taskCoreBox[parseInt(i % 5) + 5][3].push(newArr[i]);
        }
        if (parseInt(i / 5) === 4) {
          taskCoreBox[parseInt(i % 5) + 5][4].push(newArr[i]);
=======
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
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        }
      }

      // console.table(arr);
    }

<<<<<<< HEAD
    // console.table(taskCoreBox[6][0]);
    // console.table(taskCoreBox[6][1]);
    // console.table(taskCoreBox[6][2]);
    // console.table(taskCoreBox[6][3]);
    // console.table(taskCoreBox[6][4]);
    // console.log(taskCoreBox[0][0]);
=======
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
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
  } catch (error) {
    console.log(error);
  }

  try {
    const filter = { name: fileName };
    let update = {
      core1: [
        {
<<<<<<< HEAD
          task1: taskCoreBox[0][0],
          task2: taskCoreBox[0][1],
          task3: taskCoreBox[0][2],
          task4: taskCoreBox[0][3],
          task5: taskCoreBox[0][4],
=======
          task1: data[0][0],
          task2: data[0][1],
          task3: data[0][2],
          task4: data[0][3],
          task5: data[0][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      core2: [
        {
<<<<<<< HEAD
          task1: taskCoreBox[1][0],
          task2: taskCoreBox[1][1],
          task3: taskCoreBox[1][2],
          task4: taskCoreBox[1][3],
          task5: taskCoreBox[1][4],
=======
          task1: data[1][0],
          task2: data[1][1],
          task3: data[1][2],
          task4: data[1][3],
          task5: data[1][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      core3: [
        {
<<<<<<< HEAD
          task1: taskCoreBox[2][0],
          task2: taskCoreBox[2][1],
          task3: taskCoreBox[2][2],
          task4: taskCoreBox[2][3],
          task5: taskCoreBox[2][4],
=======
          task1: data[2][0],
          task2: data[2][1],
          task3: data[2][2],
          task4: data[2][3],
          task5: data[2][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      core4: [
        {
<<<<<<< HEAD
          task1: taskCoreBox[3][0],
          task2: taskCoreBox[3][1],
          task3: taskCoreBox[3][2],
          task4: taskCoreBox[3][3],
          task5: taskCoreBox[3][4],
=======
          task1: data[3][0],
          task2: data[3][1],
          task3: data[3][2],
          task4: data[3][3],
          task5: data[3][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      core5: [
        {
<<<<<<< HEAD
          task1: taskCoreBox[4][0],
          task2: taskCoreBox[4][1],
          task3: taskCoreBox[4][2],
          task4: taskCoreBox[4][3],
          task5: taskCoreBox[4][4],
=======
          task1: data[4][0],
          task2: data[4][1],
          task3: data[4][2],
          task4: data[4][3],
          task5: data[4][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],

      task1: [
        {
<<<<<<< HEAD
          core1: taskCoreBox[5][0],
          core2: taskCoreBox[5][1],
          core3: taskCoreBox[5][2],
          core4: taskCoreBox[5][3],
          core5: taskCoreBox[5][4],
=======
          core1: data[5][0],
          core2: data[5][1],
          core3: data[5][2],
          core4: data[5][3],
          core5: data[5][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      task2: [
        {
<<<<<<< HEAD
          core1: taskCoreBox[6][0],
          core2: taskCoreBox[6][1],
          core3: taskCoreBox[6][2],
          core4: taskCoreBox[6][3],
          core5: taskCoreBox[6][4],
=======
          core1: data[6][0],
          core2: data[6][1],
          core3: data[6][2],
          core4: data[6][3],
          core5: data[6][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      task3: [
        {
<<<<<<< HEAD
          core1: taskCoreBox[7][0],
          core2: taskCoreBox[7][1],
          core3: taskCoreBox[7][2],
          core4: taskCoreBox[7][3],
          core5: taskCoreBox[7][4],
=======
          core1: data[7][0],
          core2: data[7][1],
          core3: data[7][2],
          core4: data[7][3],
          core5: data[7][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      task4: [
        {
<<<<<<< HEAD
          core1: taskCoreBox[8][0],
          core2: taskCoreBox[8][1],
          core3: taskCoreBox[8][2],
          core4: taskCoreBox[8][3],
          core5: taskCoreBox[8][4],
=======
          core1: data[8][0],
          core2: data[8][1],
          core3: data[8][2],
          core4: data[8][3],
          core5: data[8][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
      task5: [
        {
<<<<<<< HEAD
          core1: taskCoreBox[9][0],
          core2: taskCoreBox[9][1],
          core3: taskCoreBox[9][2],
          core4: taskCoreBox[9][3],
          core5: taskCoreBox[9][4],
=======
          core1: data[9][0],
          core2: data[9][1],
          core3: data[9][2],
          core4: data[9][3],
          core5: data[9][4],
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
        },
      ],
    };

    if (await inputModel.findOneAndUpdate(filter, update, { upsert: true })) {
      console.log("DB에 업데이트 ");
<<<<<<< HEAD
=======
      console.log(req.body);
      return res.render("highChart", {
        pageTitle: "highChart",

        showGraph: showGraph,
      });
>>>>>>> 4c603b2deb4b719069d33a8f17669b022da20e09
    } else {
      console.log("DB에 새로 저장");
    }

    return res.render("highChart", {
      pageTitle: "highChart",
      testArr: [10, 20, 30, 40, 50],
    });
  } catch (error) {
    console.log(`DB 오류 있음 : ${error}`);
    return res.redirect("/");
  }
};

export const show = async (req, res, next) => {
  const { poto } = req.params;
  console.log(poto);
  let data = await inputModel.find({ name: "inputFile.txt" });

  // console.log(data[0][poto][0]);
  let arr = data[0][poto][0];
  let maxArr = [];
  let avgArr = [];
  let minArr = [];
  let d = "";
  console.log(poto[0]);
  if (poto[0] === "t") d = "core";
  else d = "task";

  for (let i = 1; i <= 5; i++) {
    maxArr.push(max(arr[d + i]));
    avgArr.push(avg(arr[d + i]));
    minArr.push(min(arr[d + i]));
  }

  return res.render("highChart", { pageTitle: poto, maxArr, minArr, avgArr });
};

function max(arr) {
  let max = 0;
  for (const i of arr) {
    if (max < i) max = i;
  }
  return max;
}

function avg(arr) {
  let avg = 0;
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  avg = sum / arr.length;
  return avg;
}

function min(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (const i of arr) {
    if (min > i) min = i;
  }
  return min;
}
