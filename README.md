# configuration-management-p2-2025-2

## Team Task Tracker

## Description

Full-stack web application that allows users to view, add, and update simple task items. The project is divided into two main components:

- **Frontend**: Single-page web application (HTML, CSS, JavaScript)
- **Backend**: REST API developed with Node.js and Express

## Development Team

- **Team Leader**: Jair Chaguay - Backend (PUT /tasks/:id endpoint)
- **Developer 1**: Paulette Maldonado - Backend (POST and GET /tasks endpoints)
- **Developer 2**: Melissa Cruz - Frontend (Task list, add task form, mark as completed)

## Installation and Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (included with Node.js)
- Git

### Steps to run the project

1. **Clone the repository**

```bash
git clone https://github.com/NataliaMw/configuration-management-p2-2025-2.git
cd configuration-management-p2-2025-2
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the backend**

```bash
cd backend
node index.js
```

4. **Open the frontend**

- Open the `frontend/index.html` file in your browser

## 🔧 Implemented Features

### Frontend

- Task list display
- Add new task
- Mark task as completed

### Backend

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Add new task
- `PUT /tasks/:id` - Mark task as completed

## Branching Strategy

- **Group branch**: `group-5`
- **Feature branches**:
  - `chaguay/group-5` (Team Leader)
  - `maldonado/group-5`
  - `cruz/group-5`

Each developer worked on their own feature branch and the team leader integrated changes through merges.

_Project developed for Software Engineering II - ESPOL_
