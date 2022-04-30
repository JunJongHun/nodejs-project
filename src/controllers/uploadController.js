import path from "path";

export const upload = (req, res, next) => {
  return res.sendFile(path.join(__dirname + "./../static/upload.html"));
}; //이것도 콜백함수 되것네
