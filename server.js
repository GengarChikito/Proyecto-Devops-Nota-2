const express = require('express');
const app = express();
const port = 3000; // Puerto interno del contenedor, ya configurado en el Dockerfile

app.get('/', (req, res) => {
  res.send('¡Hola desde el Microservicio Contenerizado de Node.js!');
});

// Mantenemos app.listen aquí para iniciar el servidor cuando se ejecute directamente
app.listen(port, () => {
  console.log(`Microservicio Node.js ejecutándose en el puerto ${port}`);
});

// LÍNEA CLAVE: Exportamos la aplicación Express para que Jest/Supertest pueda probarla.
module.exports = app;