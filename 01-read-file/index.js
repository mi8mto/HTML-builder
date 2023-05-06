const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "text.txt");
const stream = fs.createReadStream(filePath, "utf-8");

let string = "";
stream.on("data", (chunk) => (string += chunk));
stream.on("end", () => {
  console.log(string);
});
