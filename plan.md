# Guía para la Interacción con IA en el Ejercicio de Gestión Colaborativa de Versiones con Git

## 1. Introducción

Este documento tiene como objetivo proporcionar una guía estructurada para los miembros del equipo (dos desarrolladores de backend y dos de frontend) sobre cómo interactuar eficazmente con herramientas de Inteligencia Artificial (IA), como ChatGPT, para completar el ejercicio práctico de Gestión Colaborativa de Versiones con Git. La meta es maximizar la eficiencia y la calidad del código, asegurando al mismo tiempo una comprensión profunda de los conceptos de Git y el desarrollo de software.

## 2. Descripción del Proyecto: Task Tracker

El ejercicio consiste en simular un equipo de desarrollo colaborando en un sistema web full-stack de tipo **Task Tracker**. Este sistema permitirá a los usuarios visualizar, añadir y actualizar tareas simples. La particularidad del ejercicio es que cada componente (frontend y backend) debe ser implementado en un **único archivo**.

### 2.1. Componente Frontend

Desarrollado con HTML, CSS y JavaScript en un solo archivo `index.html`. Funcionalidades principales:
- Mostrar una lista de tareas (obtenidas de la API de backend).
- Añadir una nueva tarea mediante un campo de entrada.
- Marcar una tarea como completada.

### 2.2. Componente Backend

Desarrollado como una API REST mínima usando Node.js y Express en un solo archivo `index.js`. Endpoints principales:
- `GET /tasks`: Recuperar todas las tareas.
- `POST /tasks`: Añadir una nueva tarea.
- `PUT /tasks/:id`: Marcar una tarea como completada.

## 3. Instrucciones Generales para la Interacción con la IA

Al interactuar con su IA, considere las siguientes pautas para obtener los mejores resultados:

*   **Claridad y Especificidad**: Sea lo más claro y específico posible en sus solicitudes. Proporcione el contexto completo del proyecto y los requisitos del ejercicio.
*   **Iteración y Refinamiento**: Si la primera respuesta de la IA no es perfecta, refine su pregunta o pídale a la IA que modifique su respuesta basándose en sus comentarios.
*   **Validación y Comprensión**: No copie y pegue el código directamente. Asegúrese de entender el código generado, pruébelo y adáptelo a las necesidades específicas del proyecto.
*   **Enfoque en el Problema, no en la Solución**: Describa el problema que necesita resolver o la funcionalidad que desea implementar, en lugar de pedirle a la IA que escriba una solución completa sin contexto.
*   **Manejo de Errores**: Si encuentra errores, proporcione el mensaje de error completo a la IA y pídale que le ayude a depurar o corregir el problema.
*   **Restricciones Clave**: Siempre recuerde a la IA la restricción de **un solo archivo** (`index.html` para frontend, `index.js` para backend) para todo el código.

## 4. Instrucciones Específicas para Desarrolladores Frontend

Los dos desarrolladores de frontend trabajarán en el archivo `index.html`. Sus tareas se dividirán de la siguiente manera:

### 4.1. Desarrollador Frontend 1: Visualización de Tareas (GET /tasks)

**Objetivo**: Implementar la visualización de la lista de tareas y la conexión con el endpoint `GET /tasks` del backend.

**Qué decirle a la IA (ejemplos de prompts):**

*   

-   `Necesito crear un archivo index.html que muestre una lista de tareas. Las tareas deben obtenerse de una API REST en 'http://localhost:3000/tasks' usando JavaScript. El HTML debe incluir un título, un div para la lista de tareas y un script que haga la solicitud GET y renderice las tareas en la página. El CSS debe ser mínimo, solo para que la lista sea legible. Recuerda que todo debe estar en un solo archivo index.html.`
-   `He recibido este JSON del backend: ````json
    [{"id": 1, "description": "Comprar leche", "completed": false}, {"id": 2, "description": "Pasear al perro", "completed": true}]
    ```` `¿Cómo puedo renderizar esto como una lista desordenada (<ul>) en mi index.html, mostrando la descripción y marcando las completadas?`
-   `¿Cómo puedo manejar errores de red o cuando la API no responde al intentar obtener las tareas en mi script de index.html?`

### 4.2. Desarrollador Frontend 2: Añadir Nuevas Tareas (POST /tasks) y Marcar como Completadas (PUT /tasks/:id)

**Objetivo**: Implementar el formulario para añadir nuevas tareas y la funcionalidad para marcar tareas como completadas, interactuando con los endpoints `POST /tasks` y `PUT /tasks/:id` del backend.

**Qué decirle a la IA (ejemplos de prompts):**

-   `En mi archivo index.html, necesito añadir un formulario simple con un campo de texto y un botón para 'Añadir Tarea'. Al enviar el formulario, el texto debe enviarse a la API 'http://localhost:3000/tasks' usando un método POST. Después de añadir la tarea, la lista de tareas debe actualizarse dinámicamente. Todo el código debe estar en index.html.`
-   `Una vez que la lista de tareas se muestra (como en la sección anterior), necesito una forma de marcar una tarea como completada. Cada elemento de la lista de tareas debe tener un botón o un checkbox. Al activarlo, debe enviar una solicitud PUT a 'http://localhost:3000/tasks/:id' (donde :id es el ID de la tarea) para actualizar su estado a 'completed: true'. La interfaz de usuario debe reflejar este cambio. Todo en index.html.`
-   `¿Cómo puedo asegurarme de que el ID de la tarea se envíe correctamente en la URL para la solicitud PUT cuando marco una tarea como completada?`
-   `¿Qué validaciones básicas puedo añadir en el frontend para el campo de entrada de nuevas tareas antes de enviarlas al backend?`

## 5. Instrucciones Específicas para Desarrolladores Backend

Los dos desarrolladores de backend trabajarán en el archivo `index.js`. Sus tareas se dividirán de la siguiente manera:

### 5.1. Desarrollador Backend 1: Obtener Tareas (GET /tasks)

**Objetivo**: Implementar el endpoint `GET /tasks` para recuperar todas las tareas almacenadas.

**Qué decirle a la IA (ejemplos de prompts):**

-   `Necesito crear un servidor Node.js simple usando Express en un único archivo index.js. Debe tener un endpoint GET /tasks que devuelva un array JSON de objetos de tareas. Cada objeto de tarea debe tener un 'id', 'description' y 'completed' (booleano). Inicialmente, puedo usar un array en memoria para almacenar las tareas. El servidor debe escuchar en el puerto 3000.`
-   `¿Cómo puedo añadir un middleware CORS a mi aplicación Express en index.js para permitir solicitudes desde cualquier origen, ya que el frontend estará en un puerto diferente?`
-   `¿Cómo puedo simular una base de datos simple en memoria para almacenar y recuperar las tareas en mi index.js, asegurándome de que los IDs sean únicos?`

### 5.2. Desarrollador Backend 2: Añadir Nuevas Tareas (POST /tasks) y Marcar como Completadas (PUT /tasks/:id)

**Objetivo**: Implementar los endpoints `POST /tasks` para añadir nuevas tareas y `PUT /tasks/:id` para marcar tareas como completadas.

**Qué decirle a la IA (ejemplos de prompts):**

-   `En mi archivo index.js (servidor Express), necesito añadir un endpoint POST /tasks. Este endpoint debe recibir un objeto JSON con una 'description' de la nueva tarea. Debe generar un ID único para la tarea, establecer 'completed' a false por defecto y añadirla a mi array de tareas en memoria. Luego, debe devolver la tarea recién creada con un código de estado 201. Recuerda que todo debe estar en index.js.`
-   `Necesito añadir un endpoint PUT /tasks/:id a mi servidor Express en index.js. Este endpoint debe tomar el 'id' de la URL y un cuerpo JSON que indique 'completed: true'. Debe encontrar la tarea correspondiente en mi array en memoria y actualizar su estado. Si la tarea no se encuentra, debe devolver un 404. Si se actualiza correctamente, debe devolver la tarea actualizada. Todo en index.js.`
-   `¿Cómo puedo validar que la 'description' en la solicitud POST /tasks no esté vacía antes de crear una nueva tarea?`
-   `¿Qué código de estado HTTP debería devolver si el ID proporcionado en la solicitud PUT /tasks/:id no es un número válido o no existe en mis tareas?`

## 6. Consideraciones Adicionales para el Trabajo Colaborativo y Git

Aunque la IA puede ayudar con el código, es crucial entender y aplicar los principios de Git para la colaboración:

*   **Ramas de Características**: Cada desarrollador debe trabajar en su propia rama de característica (`student-lastname/group-id`). La IA puede ayudar a entender comandos de Git si es necesario, pero la gestión de ramas es responsabilidad del equipo.
*   **Commits Significativos**: Realice commits pequeños y frecuentes con mensajes claros y descriptivos. La IA puede ayudar a redactar buenos mensajes de commit si se le proporciona el contexto de los cambios.
*   **Resolución de Conflictos**: Dado que el ejercicio está diseñado para generar conflictos de fusión (al trabajar en un solo archivo), la IA puede ser una herramienta invaluable para entender cómo resolverlos. Por ejemplo, puede preguntar: `Tengo un conflicto de fusión en index.html (o index.js) entre mi rama y la rama principal. Aquí está el bloque de conflicto: [pegar bloque de conflicto]. ¿Cómo puedo resolverlo correctamente?`
*   **Revisión de Código**: Utilice la IA para revisar su propio código antes de enviarlo. Pregunte: `¿Puedes revisar este fragmento de código JavaScript (o Node.js) para posibles errores, mejoras de rendimiento o buenas prácticas? [pegar código]`

## 7. Referencias

[1] Documento de Ejercicio Práctico: Gestión Colaborativa de Versiones con Git P2. (Adjunto en la tarea).

