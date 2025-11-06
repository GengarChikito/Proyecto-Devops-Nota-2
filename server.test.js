// Importamos la librería de simulación HTTP (supertest)
const request = require('supertest');
// Importamos la aplicación Express que acabamos de exportar en server.js
const app = require('./server'); 

// Bloque de pruebas (describe)
describe('Pruebas Unitarias de Integración para el Microservicio (IE2)', () => {
  
  // Prueba específica (test)
  test('GET / debe responder con status 200 y el mensaje correcto', async () => {
    // Simulamos una petición HTTP GET a la aplicación (app) en la ruta /
    const response = await request(app).get('/');
    
    // 1. Verificamos el código de estado HTTP
    expect(response.statusCode).toBe(200); 
    
    // 2. Verificamos el contenido del cuerpo de la respuesta
    // NOTA: EL TEXTO DEBE SER IDÉNTICO AL QUE ESTÁ EN server.js
    expect(response.text).toBe('¡Hola desde el Microservicio Contenerizado de Node.js!');
  });
});