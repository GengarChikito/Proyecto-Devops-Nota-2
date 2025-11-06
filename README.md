# 🚀 Proyecto DevSecOps - Microservicio Node.js

Este es el microservicio trabajado para el proyecto DevSecOps. Se ha configurado una arquitectura **simple y básica** de CI/CD (Integración Continua / Despliegue Continuo) para garantizar la calidad y la trazabilidad del código.

## 🛡️ Estado del Pipeline de CI/CD

El estado del pipeline se verifica automáticamente con GitHub Actions en cada *push* a la rama `main`.

[![GitHub Actions CI Status](https://github.com/GengarChikito/Proyecto-Devops-Nota-2/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/GengarChikito/Proyecto-Devops-Nota-2/actions/workflows/ci-cd-pipeline.yml)

## ✅ Garantía de Calidad y Trazabilidad

El proceso de  CI/CD se basa en los siguientes pasos, cumpliendo los requisitos del proyecto:

| Requisito | Herramienta | Cumplimiento |
| :--- | :--- | :--- |
| **Conteneirización (IE1)** | `Dockerfile` | Define el entorno de ejecución inmutable del microservicio. |
| **Pruebas Unitarias (IE2)** | **Jest / Supertest** | Se ejecutan automáticamente en el pipeline. Si fallan, el despliegue se bloquea. |
| **Seguridad (IE3)** | **Dependabot / Snyk** | Se escanean las dependencias en busca de vulnerabilidades antes de cada *build* de imagen. |
| **Despliegue (IE4)** | **GitHub Actions** | El *pipeline* solo procede al despliegue si todas las pruebas y escaneos de seguridad son exitosos. |
| **Orquestación (IE5)** | **Docker Compose** | Estrategia simple implementada para simular el despliegue en un entorno de pruebas. |

## 🛠️ Ejecución Local

Para probar el microservicio y su orquestación en tu máquina:

1.  Asegúrate de tener Docker Desktop iniciado.
2.  Ejecuta el siguiente comando en la raíz del proyecto para construir la imagen e iniciar el contenedor zzsssme voy a volver loco si no corre synk  meti sonarqube odio synkz.....:
y eso

```bash
docker compose up -d --build