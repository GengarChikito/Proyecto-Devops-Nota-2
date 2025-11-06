// Importamos la librería de simulación HTTP (supertest)
const request = require('supertest');
// Importamos la aplicación Express que acabamos de exportar en server.js
const app = require('./server'); 

// Bloque de pruebas (describe)
describe('Pruebas Unitarias de Integración para el Microservicio (IE2)', () => {
  
  // Prueba específica (test)
  test('GET / debe responder con status 200 y el mensaje de Evaluación 2', async () => {
    // Simulamos una petición HTTP GET a la aplicación (app) en la ruta /
    const response = await request(app).get('/');
    
    // 1. Verificamos el código de estado HTTP (200 OK)
    expect(response.statusCode).toBe(200); 
    
    // 2. Verificamos el contenido del cuerpo de la respuesta (debe coincidir con server.js)
    expect(response.text).toBe('Prueba de microservicio evualuacion 2 :)');
  });
});