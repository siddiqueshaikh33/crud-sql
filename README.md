# crud-sql
# CRUD Vite-React MySQL Website

A simple CRUD application built using Vite-React for the front-end and Express.js with MySQL for the back-end. This app manages a list of students, including adding, viewing, updating, and deleting student records.

## Features

- Add new students
- View all students
- Update student details
- Delete students

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MySQL

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Back-End Setup:**

    ```bash
    cd server
    npm install
    ```

    Create and configure the MySQL database:

    ```sql
    CREATE DATABASE crud;
    USE crud;
    CREATE TABLE student (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );
    ```

    Update `server/index.js` with your database credentials and start the server:

    ```bash
    node index.js
    ```

3. **Front-End Setup:**

    ```bash
    cd ../client
    npm install
    npm run dev
    ```

## Usage

1. Visit `http://localhost:3000` in your browser.
2. Use the form to add new students.
3. Click edit to update student details.
4. Click delete to remove students.

## API Endpoints

- `GET /` - Retrieve all students
- `POST /add` - Add a new student
- `PUT /edit/:id` - Update a student
- `DELETE /delete/:id` - Delete a student

## Example Requests

**Get All Students:**

```bash
curl http://localhost:5000/
