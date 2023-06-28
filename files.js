const fs = require("fs");
const path = require("path");


function createFile(file, data) {
  
  return new Promise((resolve, reject) => {
    let dataFlag = !isNaN(data) ? "" + data : data.join(" ");

    fs.writeFile(path.join(__dirname, `files/${file}`), dataFlag, (err) => {
      if (err) reject(err);

      resolve();
    });
  });
}

function readFile(file, title) {
  return new Promise((resolve, reject) => {

    fs.readFile(path.join(__dirname, `files/${file}`), "utf8", async (err, data) => {
      if (err) reject(err);
      // if(file === 'original.txt') return;

      
      if (!isNaN(data[0])) {
        await createFile('original.txt', [data])
        const numeros = data.split(",");
        let sumatoria = 0;
        
        for (let i = 0; i < numeros.length; i++) {
          sumatoria += Number(numeros[i]);
        }
        
        createFile("numeros.txt", sumatoria);
      }
      console.log(`${title} ${data}`);
      resolve();
    });
  });
}
// 1, 2, 4, 5, 5, 6
module.exports = { createFile, readFile };
