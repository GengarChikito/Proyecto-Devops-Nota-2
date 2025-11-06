# 1. ETAPA DE CONSTRUCCIÓN (BUILDER)
# Usamos una imagen completa de Node.js para instalar dependencias y construir la app.
FROM node:20-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
# Esto aprovecha el caché de Docker si solo package.json cambia
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Si tu proyecto usa TypeScript o un bundler (como Webpack), descomenta la línea de construcción:
# RUN npm run build

# 2. ETAPA FINAL
# Usamos una imagen base más pequeña para el entorno de ejecución, 
# ya que solo necesitamos ejecutar la aplicación, no las herramientas de desarrollo.
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo el código y las dependencias (node_modules) necesarios desde la etapa 'builder'
# Si tienes una carpeta de 'build' (ej: 'dist'), copia esa en su lugar:
# COPY --from=builder /app/dist ./dist 
COPY --from=builder /app .

# Puerto que expone el microservicio
EXPOSE 3000

# Comando para iniciar la aplicación (Asumiendo que tienes un script 'start' en package.json)
# Usa 0.0.0.0 para escuchar todas las interfaces de red dentro del contenedor
CMD ["npm", "start"]