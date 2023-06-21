const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files/hello.csv'), 'utf-8', (error, data) => {
  if (error) throw error;

  const lines = data.split('\n');
  const objects = [];

  for (const line of lines) {
    const [name, lastName, age] = line.split(',');

    objects.push({ name, lastName, age });
  }

  console.log(objects);
});

fs.writeFile(path.join(__dirname, 'files/test.csv'), 'torvi rap22', (err) => {
  if (err) throw new err;

  console.log('Funcionó');
});

process.on('uncaughtException', (err) => {
  console.log('Paso algo!', err);
  process.exit(1);
})