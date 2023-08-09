const db = require('./db')
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.status(200).send('¡Bienvenido al servidor HTTP usando Express!')
})

app.get('/task', (req, res) => {
  res.status(200).json(db)
})

app.post('/task', (req, res) => {
  // const { name, description } = req.body;
  console.log(req.body);

  // db.push({ id, name, description });
  res.status(201).json({ message: 'Tarea agregada exitosamente.' });
});

// app.get('/image/:username', (req, res) => {
//   const { username } = req.params;
//   if (username === 'ronny') {
//     return res.sendFile(__dirname + '/ronny_image.jpg');
//   } else {
//     return res.status(404).send('Página no encontrada');
//   }
// });

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
