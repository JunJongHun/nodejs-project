import inputModel from "../models/input"; // 모델 가져옴
import fs from "fs"; // fs node 모듈 불러오기
import { avg, max, min } from "../graphFuction";

export const upload = async (req, res, next) => {
  let fileName = req.file.originalname; // 파일 이름을 fileName에 할당
  console.log(`파일 이름 확인용 : ${fileName}}`);

  let arr; // arr 정의
  let taskCoreBox = [
    // taskCoreBox 다중배열 형식으로 정의
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
      // 파일 동기 처리 방식 활용
      __dirname + `/../uploads/${fileName}`,
      "utf-8"
    );

    arr = file_data.split(/\s+/); // file_data에서 공백 문자를 기준으로 문자열을 나누어 arr에 할당.
    console.log("가공한 데이터가 배열에 어떻게 저장되었나 확인용");
    console.table(arr);
    arr.shift(); // arr의 맨 앞 값 제거 (공백)
    arr.pop(); // arr의 맨 끝 값 제거 (공백)

    // for 문을 돌려 숫자 외에 다른 값들 (core1, task1 등) 제거하도록 가공하는 과정
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (isNaN(Number(arr[i]))) {
          // i가 숫자가 아닐 시 splice를 이용해 i로부터 하나의 문자열 제거
          arr.splice(i, 1);
        }
      }
    }

    // 유효성 검사 부분
    if (arr.length !== 250) {
      console.log("데이터 개수 누락 또는 많음");
      return res.status(400).render("mainPage", { alert: true });
    }

    // inputfile을 총 10개의 그룹으로 나누었다고 가정하고 이중 for문을 돌게 함
    // 그룹마다 각각 25개의 숫자로 나뉘도록 슬라이스 ([0]~[24], [25]~[49], ...)
    // 그룹 안 숫자에 대한 인덱스 값이 하나씩 돌면서, 5로 나눴을 때 나오는 나머지 값에 따라 각각 해당하는 배열의 맨 끝에 추가되도록 함.

    for (let j = 0; j < 10; j++) {
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
        if (i % 5 === 0) {
          // 인덱스 값을 5로 나누고 나머지 확인
          taskCoreBox[parseInt(i / 5)][0].push(newArr[i]); // 5로 나누었을 때의 parseInt에 의해 몫에 따라 들어가는 배열 구분
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
      }
      // console.table(arr);
    }

    for (let j = 0; j < 10; j++) {
      // 위와 동일한 방식으로 진행 ( 행 열을 바꿔 줌 )
      let newArr = arr.slice(j * 25, j * 25 + 25);
      for (let i = 0; i < 25; i++) {
        if (parseInt(i / 5) === 0) {
          // i의 인덱스 값이
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
        }
      }
      // console.table(arr);
    }

    // console.table(taskCoreBox); // 데이터가 잘 들어갔는지 확인용
  } catch (error) {
    console.log(error); // 에러 발생 시 에러 출력
  }

  try {
    const filter = { name: fileName }; // 올리는 파일 이름을 name에 두고 필터로 후에 중복 체크시 필요
    let update = {
      // 가공 된 값들을 배열에 업데이트
      core1: [
        {
          task1: taskCoreBox[0][0],
          task2: taskCoreBox[0][1],
          task3: taskCoreBox[0][2],
          task4: taskCoreBox[0][3],
          task5: taskCoreBox[0][4],
        },
      ],
      core2: [
        {
          task1: taskCoreBox[1][0],
          task2: taskCoreBox[1][1],
          task3: taskCoreBox[1][2],
          task4: taskCoreBox[1][3],
          task5: taskCoreBox[1][4],
        },
      ],
      core3: [
        {
          task1: taskCoreBox[2][0],
          task2: taskCoreBox[2][1],
          task3: taskCoreBox[2][2],
          task4: taskCoreBox[2][3],
          task5: taskCoreBox[2][4],
        },
      ],
      core4: [
        {
          task1: taskCoreBox[3][0],
          task2: taskCoreBox[3][1],
          task3: taskCoreBox[3][2],
          task4: taskCoreBox[3][3],
          task5: taskCoreBox[3][4],
        },
      ],
      core5: [
        {
          task1: taskCoreBox[4][0],
          task2: taskCoreBox[4][1],
          task3: taskCoreBox[4][2],
          task4: taskCoreBox[4][3],
          task5: taskCoreBox[4][4],
        },
      ],

      task1: [
        {
          core1: taskCoreBox[5][0],
          core2: taskCoreBox[5][1],
          core3: taskCoreBox[5][2],
          core4: taskCoreBox[5][3],
          core5: taskCoreBox[5][4],
        },
      ],
      task2: [
        {
          core1: taskCoreBox[6][0],
          core2: taskCoreBox[6][1],
          core3: taskCoreBox[6][2],
          core4: taskCoreBox[6][3],
          core5: taskCoreBox[6][4],
        },
      ],
      task3: [
        {
          core1: taskCoreBox[7][0],
          core2: taskCoreBox[7][1],
          core3: taskCoreBox[7][2],
          core4: taskCoreBox[7][3],
          core5: taskCoreBox[7][4],
        },
      ],
      task4: [
        {
          core1: taskCoreBox[8][0],
          core2: taskCoreBox[8][1],
          core3: taskCoreBox[8][2],
          core4: taskCoreBox[8][3],
          core5: taskCoreBox[8][4],
        },
      ],
      task5: [
        {
          core1: taskCoreBox[9][0],
          core2: taskCoreBox[9][1],
          core3: taskCoreBox[9][2],
          core4: taskCoreBox[9][3],
          core5: taskCoreBox[9][4],
        },
      ],
    };

    if (await inputModel.findOneAndUpdate(filter, update, { upsert: true })) {
      // 파일이 db에 이미 존재하는지 필터로 확인 후 동일한 이름을 찾아 값을 업데이트
      console.log("DB에 업데이트 ");
    } else {
      // 새로운 파일일 시 db에 새로 저장하고 확인 값 출력
      console.log("DB에 새로 저장");
    }

    return res.render("highChart", {
      pageTitle: fileName,
      screen: false,
    });
  } catch (error) {
    console.log(`DB 오류 있음 : ${error}`);
    return res.redirect("/");
  }
};

export const show = async (req, res, next) => {
  const { Tc, file } = req.params;
  console.log(Tc);
  console.log(file);
  let data = await inputModel.find({ name: file });

  console.log(data[0][Tc][0]);

  let arr = data[0][Tc][0];
  let maxArr = [];
  let avgArr = [];
  let minArr = [];
  let miniTitle = "";
  console.log(Tc[0]);
  if (Tc[0] === "t") miniTitle = "core";
  else miniTitle = "task";

  for (let i = 1; i <= 5; i++) {
    maxArr.push(max(arr[miniTitle + i]));
    avgArr.push(avg(arr[miniTitle + i]));
    minArr.push(min(arr[miniTitle + i]));
  }

  return res.render("highChart", {
    pageTitle: file,
    Tc: Tc,
    miniTitle: miniTitle,
    maxArr,
    minArr,
    avgArr,
    screen: true,
  });
};
