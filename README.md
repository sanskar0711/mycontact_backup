Contacts Backup

Overview
Contacts Backup is a Node.js application that allows users to create, edit, delete, and manage their contacts. Users can register themselves, log in, and perform CRUD (Create, Read, Update, Delete) operations on their contacts. The application ensures that each user maintains their contacts independently and securely.

Features
1. User registration
2. User login and authentication
3. Create, read, update, and delete contacts
4. Separate contact management for each user
5. Secure password storage using hashing

Folder Structure

contacts-backup/
│
├── controllers/
│   ├── contactController.js
│   └── userController.js
│
├── models/
│   ├── contactModel.js
│   ├── userModel.js
│
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── validateTokenHandler.js
│
├── config/
│   ├── dbConnection.js
│
├── .env
├── .gitignore
├── server.js
└── package.json


Getting Started

Prerequisites
Make sure you have the following installed:
1. Node.js
2. npm (Node Package Manager)
3. MongoDB


Installation

1. Clone the repository:
  git clone https://github.com/your-username/contacts-backup.git
  cd contacts-backup

2. Install the dependencies:
  npm install

3. Create a .env file in the root directory and add the following environment variables:
  MONGO_URI=<your_mongodb_connection_string>
  JWT_SECRET=<your_jwt_secret>

4. Start the application:
  npm start


API Endpoints

Auth Routes
POST /api/register - Register a new user
POST /api/login - Login an existing user

Contact Routes
GET /api/contacts - Get all contacts for the logged-in user
POST /api/contacts - Create a new contact
GET /api/contacts/:id - Get a specific contact by ID
PUT /api/contacts/:id - Update a contact by ID
DELETE /api/contacts/:id - Delete a contact by ID


Project Structure

Controllers
authController.js: Handles user registration and login.
contactController.js: Manages CRUD operations for contacts.
userController.js: Manages user data (if needed).

Models
contactModel.js: Mongoose schema and model for contacts.
userModel.js: Mongoose schema and model for users.

Routes
authRoutes.js: Routes for authentication (register and login).
contactRoutes.js: Routes for contact CRUD operations.
userRoutes.js: Routes for user management (if needed).

Middleware
authMiddleware.js: Middleware for protecting routes and checking authentication.

Config
db.js: MongoDB connection setup.
config.js: Configuration settings (if needed).

Utils
errorHandler.js: Custom error handling utility.
