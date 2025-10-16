# Collaborative Configuration Management Project with Git

## Project Overview

Implement version control in a collaborative development environment using Git. Work with branches, merge changes, and resolve conflicts in a multi-developer setup.
Students can choose between a **backend web application** or a **frontend web application** based on their preference.

## Project Structure

* `/Frontend/` - Single Page Application (HTML, CSS, JavaScript)
* `/Backend/` - REST API using Node.js and Express

## Team Members

* **Team Leader**: Steeven Gómez
* **Members**: Ariana Gonzabay (A), Raúl Laurido (B), José Delgado (C)

## Task Assignment

### Frontend

* **Developer A**: Add the **“Add New Task”** form and handle its submission using JavaScript (POST /tasks)
* **Developer B**: Implement the functionality to **mark tasks as completed** and update the UI dynamically
* **Developer C**: Implement the **task list display** and connect it with the backend API (GET /tasks)

### Backend

* **Developer A**: Develop the **POST /tasks** endpoint to add a new task
* **Developer B**: Create the **PUT /tasks/:id** endpoint to mark tasks as completed
* **Developer C**: Implement the **GET /tasks** endpoint to retrieve all tasks

## Branching Strategy

* Main group branch: `group-4`
* Feature branches:

  * `gomez/group-4`
  * `gonzabay/group-4`
  * `laurido/group-4`
  * `delgado/group-4`
