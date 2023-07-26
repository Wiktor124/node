const path = require('path')
const testRoutes = require('./routes/routes');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, './public')))
app.use(testRoutes)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
