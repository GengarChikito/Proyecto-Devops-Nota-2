const express = require('express');
const app = express();
const port = 3000; // Puerto interno del contenedor

// Ruta raíz del microservicio
app.get('/', (req, res) => {
  // ¡Este es el nuevo mensaje que verás en el navegador!
  res.send('Prueba de microservicio evualuacion 2 :)'); 
});

// Mantenemos app.listen aquí para iniciar el servidor cuando se ejecute directamente
app.listen(port, () => {
  console.log(`Microservicio Node.js ejecutándose en el puerto ${port}`);
});

// Exportamos la aplicación Express para que Jest/Supertest pueda probarla.
module.exports = app;