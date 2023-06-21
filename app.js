const { Operaciones } = require('./operaciones')
const [values1, values2] = process.argv.slice(2);

const operaciones = new Operaciones( Number(values1), Number(values2))

operaciones.sumar()
  .then(resultado => {
    console.log('Suma:', resultado);
  })
  .catch(error => {
    console.error('Error, en la suma:', error);
  });

operaciones.resta()
  .then(resultado => {
    console.log('Resta:', resultado);
  })
  .catch(error => {
    console.error('Error, en la resta:', error);
  });

operaciones.multiplicacion()
  .then(resultado => {
    console.log('Multiplicación:', resultado);
  })
  .catch(error => {
    console.error('Error, en la multiplicación:', error);
  });

operaciones.division()
  .then(resultado => {
    console.log('División:', resultado);
  })
  .catch(error => {
    console.error('Error, en la división:', error);
  });
