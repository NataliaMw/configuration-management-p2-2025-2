# configuration-management-p2-2025-2
Implement version management in a collaborative development project using Git, working with branches, merging changes, and resolving conflicts in a multi- developer environment. Students can choose between a backend web application or a frontend web application project based on their preference.

# Proyecto de Gestión Colaborativa con Git

## Estructura del Proyecto
- `/Frontend/` - Aplicación web de una sola página (HTML, CSS, JavaScript)
- `/Backend/` - API REST con Node.js y Express

## Grupo de Trabajo
- **Líder del Equipo**: Steeven Gómez
- **Miembros**: Ariana Gonzabay(A), Raúl Laurido(B), José Delgado(C)

## Asignación de Tareas

### Frontend
- **Developer A**: Agrega el formulario "Agregar Nueva Tarea" y maneja el envío usando JavaScript (POST /tasks)
- **Developer B**: Implementa la funcionalidad de completar tareas (marcar como hecho) y actualiza la UI dinámicamente
- **Developer C**: Implementa la visualización de la lista de tareas y conexión con la API backend (GET /tasks)

### Backend
- **Developer A**: Desarrolla el endpoint POST /tasks para agregar una nueva tarea put
- **Developer B**: Crea el endpoint PUT /tasks/:id para marcar tareas como completadas
- **Developer C**: Implementa el endpoint GET /tasks para recuperar todas las tareas

## Estrategia de Ramas
- Rama principal del grupo: `group-4`
- Ramas de características: 
                            `gomez/group-4`
                            `gonzabay/group-4`
                            `laurido/group-4`
                            `delgado/group-4`

