const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log("Public directory created.");
} else {
  console.log("Public directory already exists.");
}
