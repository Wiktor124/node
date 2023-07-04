const fs = require("fs");
const path = require("path");

function readFile(file, text) {
  return fs.readFile(path.join(__dirname, file), "utf8", async (err, data) => {
    if(err) throw new Error('Oops paso algo!');
    
    const palabras = data.split(" ");
    const palabrasRepetidas = []
    
    for (let i = 0; i < palabras.length; i++) {
      
      if(String(text) === palabras[i]) {
        palabrasRepetidas.push(palabras[i])
      }
    }

    if(palabrasRepetidas.length === 0) {
      console.log(`La palabra "${text}" no existe en el archivo ${file}`);
    } else {
      console.log(`La palabra "${text}" se repite ${palabrasRepetidas.length} veces`);
    }
  });
}
module.exports = { readFile };
