const express = require('express');
const app = express();
const port = 3000; // Puerto interno del contenedor, ya configurado en el Dockerfile


app.get('/', (req, res) => {
  res.send('¡Hola desde el Microservicio Contenerizado de Node.js!');
});

//
app.listen(port, () => {
  console.log(`Microservicio Node.js ejecutándose en el puerto ${port}`);
});