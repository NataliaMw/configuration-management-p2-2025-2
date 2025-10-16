# Configuration Management Project - P2 2025-2

## Project Overview
This project implements version management in a collaborative development environment using Git. The team is building a full-stack web application with frontend and backend components, working with branches, merging changes, and resolving conflicts in a multi-developer environment.

## Team Members & Responsibilities

### Frontend Developers
- **Michael Estrada** - Frontend 1: Task Visualization (GET /tasks)
- **Victor Borbor** - Frontend 2: Add New Tasks (POST /tasks) and Mark as Completed (PUT /tasks/:id)

### Backend Developers
- **Angello** - Backend 1: Get Tasks (GET /tasks)
- **Sumba** - Backend 2: Add New Tasks (POST /tasks) and Mark as Completed (PUT /tasks/:id)

## Project Structure

```
configuration-management-p2-2025-2/
├── frontend/
│   └── index.html          # Main frontend application
├── backend/
│   └── index.js           # Main backend server
├── README.md              # Project documentation
```

## Technical Specifications

### Frontend Implementation (index.html)

#### Frontend 1 - Michael Estrada
**Objective**: Implement task list visualization and connection with GET /tasks endpoint

**Features**:
- Display task list from REST API at `http://localhost:3000/tasks`
- Render tasks as unordered list with proper styling
- Handle network errors and API unavailability
- Show loading states and error messages
- Minimal, readable CSS styling

**Key Requirements**:
- Single HTML file implementation
- JavaScript fetch API for GET requests
- Error handling for network failures
- Responsive task display

#### Frontend 2 - Victor Borbor
**Objective**: Implement form for adding new tasks and marking tasks as completed

**Features**:
- Add task form with text input and submit button
- POST new tasks to `http://localhost:3000/tasks`
- PUT requests to mark tasks as completed at `http://localhost:3000/tasks/:id`
- Dynamic UI updates after operations
- Frontend validations for task input

**Key Requirements**:
- Form validation before submission
- Correct ID handling in PUT requests
- Real-time UI updates
- All functionality in single HTML file

### Backend Implementation (index.js)

#### Backend 1 - Angello
**Objective**: Implement GET /tasks endpoint to retrieve all stored tasks

**Features**:
- Express server with GET /tasks endpoint
- JSON array response with task objects
- In-memory task storage
- CORS middleware for cross-origin requests
- Unique ID generation system

**Key Requirements**:
- Server running on port 3000
- Proper CORS configuration
- In-memory database simulation
- Unique ID management

#### Backend 2 - Sumba
**Objective**: Implement POST /tasks and PUT /tasks/:id endpoints

**Features**:
- POST /tasks for creating new tasks
- PUT /tasks/:id for marking tasks as completed
- Input validation for task descriptions
- Proper HTTP status codes (201, 404, etc.)
- Error handling for invalid IDs

**Key Requirements**:
- Task creation with auto-generated IDs
- Task completion status updates
- Validation for empty descriptions
- Appropriate HTTP response codes
