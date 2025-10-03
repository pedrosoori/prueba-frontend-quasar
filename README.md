# Prueba Técnica – Angular 20

Aplicación SPA con autenticación simulada, CRUD de Proyectos, Tareas y Empleados, y persistencia mínima en `localStorage`.

## Requisitos
- Node 20+
- Angular CLI 20+ (`npm i -g @angular/cli`)

## Instalación
```bash
npm i
npm start
```
La app arrancará en http://localhost:4200

## Credenciales
- Usuario: **admin**
- Contraseña: **admin**

## Notas
- Standalone Components (sin NgModules).
- Enrutamiento protegido por `AuthGuard`.
- Servicios con `BehaviorSubject` y persistencia en `localStorage`.
- Relaciones: Proyectos <-> Tareas <-> Empleados por IDs.