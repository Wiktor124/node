
const { createFile, readFile } = require('./files')

async function run() {
  const value = process.argv.slice(2);

  await readFile('datos.txt', 'Ejercicio 1:');
  await createFile('frases.txt', value);

  await readFile('frases.txt', 'Ejercicio 2:');

  await readFile('numeros.txt', 'Ejercicio 3:');
  await readFile('original.txt', '- Archivo con original:');
}
run().catch(err => {
  console.error('Error:', err);
});