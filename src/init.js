import "./db/db.js"; // DB 연결 파일 import
import "./models/input.js"; // input 스키마, 모델 import
import app from "./server";

const PORT = 4000; // 딱 한번만 선언가능한 const

const handleListening = () => {
  console.log(`site : http://localhost:${PORT}`); // 출력이용
};

app.listen(PORT, handleListening); // 콜백 함수로 위에 hamdlelistening으로 가서 저거 가동
