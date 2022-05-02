import path from "path";

export const main = (req, res, next) => {
  console.log(req.body);
  return res.sendFile(path.join(__dirname + "./../static/index.html"));
};
