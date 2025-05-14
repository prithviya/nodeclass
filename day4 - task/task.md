  npm run ## Project Title
  User Management API Using Express.js with File System-Based Persistence

  ## Objective
  Develop a RESTful API using Node.js and Express.js to manage user data. Each user should be stored as an individual JSON file in the file system, with the filename based on the user ID (e.g., `1.json`, `2.json`, etc.).

  ## Functional Requirements

  ### Endpoints

  #### Routes

  - **GET /users**  
    Retrieve all users or filter users by name (case-insensitive, partial match).  
    Example: `/users?name=John`

  - **GET /users/:id**  
    Retrieve a user by their ID.

  - **GET /users/search?names=John&names=Alice**  
    Search for users by exact name match (case-insensitive).  
    Supports single or multiple `names` query parameters.

- **POST /users**  
  Create a new user.  
  Request body should include: `{ "name": "John", "email": "john@example.com" }`.

- **PUT /users/:id**  
  Replace a user entirely.  
  Request body should include full user object.

- **PATCH /users/:id**  
  Partially update a user by ID.  
  Request body may include one or more fields to update.

- **DELETE /users/:id**  
  Delete a user by ID.


## Data Storage

- Store user data in the `data/` directory.
- Each user must be saved in a separate JSON file using their ID as the filename.
  - Example: `data/1.json`, `data/2.json`, etc.
- On application start, read all user files into memory.
- For each POST, PUT, PATCH, or DELETE request, update the corresponding file in the `data/` directory.

## User JSON Structure

```json
{
  "id": 1,
  "name": "John Smith",
  "email": "john@example.com"
}
````

## Technical Requirements

* Use Express.js for server and routing.
* Use Node.js `fs` or `fs.promises` for file operations.
* Use `express.json()` middleware to parse request bodies.
* Validate required fields (`name`, `email`) when creating or updating users.
* Handle errors such as missing files, invalid input, or non-existent users.

## Directory Structure

```
user-management/
├── data/
│   ├── 1.json
│   ├── 2.json
│   └── ...
├── server.js
├── package.json
└── TASK.md
```

## Sample CURL Commands

```bash
# Create user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'

# Get all users
curl http://localhost:3000/users

# Get user by ID
curl http://localhost:3000/users/1

# Update user (PUT)
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice B","email":"aliceb@example.com"}'

# Partially update user (PATCH)
curl -X PATCH http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"email":"new@example.com"}'

# Delete user
curl -X DELETE http://localhost:3000/users/1
```

