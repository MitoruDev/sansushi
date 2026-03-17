const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");

const pdfPath =
  process.argv[2] || path.join(__dirname, "../public/speisekarte.pdf");

const dataBuffer = fs.readFileSync(pdfPath);
pdfParse(dataBuffer)
  .then((data) => console.log(data.text))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
