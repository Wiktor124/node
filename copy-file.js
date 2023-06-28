const fs = require("fs");
const path = require("path");

function copyFile(file, data) {
  return fs.writeFile(path.join(__dirname, file), data, (err) => {
    if (err) 'Oops, algo paso al copiar el archivo origen!';

    console.log('Archivo copiado exitosamente!');
  });
}

function readFile(file) {
  fs.readFile(path.join(__dirname, file), "utf8", async (err, data) => {
    if (err) throw `Oops, algo paso al leer el archivo ${file}!`;

    copyFile('destino.txt', data)
  });
}

module.exports = { readFile, copyFile}