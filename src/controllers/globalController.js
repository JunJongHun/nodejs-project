import path from "path";

export const main = (req, res, next) => {
  return res.sendFile(path.join(__dirname + "./../static/main.html"));
};
