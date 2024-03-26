# Room Management System

This is a simple Room Management System built with Node.js, Express, and MongoDB. It provides API endpoints to manage different room types and rooms within a facility.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file and adding the necessary variables:

```plaintext
PORT=4000
MONGODB_URI=<your MongoDB connection URI>
```

4. Start the application in development mode using:

   ```bash
   npm run dev
   ```

   This will start the server using `nodemon`, which will automatically restart the server whenever changes are detected in the codebase.

#### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

#### Project Structure

```
.
├── controllers
│   ├── roomController.js
│   └── roomTypeController.js
├── middlewares
│   └── validation.js
├── models
│   ├── roomModel.js
│   └── roomTypeModel.js
├── routes
│   ├── roomRoutes.js
│   └── roomTypeRoutes.js
├── app.js
└── .env
```

- **controllers:** Contains controller functions for managing room types and rooms.
- **middlewares:** Contains middleware functions for request validation.
- **models:** Contains MongoDB schema definitions for room types and rooms.
- **routes:** Contains API route definitions for room types and rooms.
- **app.js:** Main entry point of the application.
- **.env:** Environment variables configuration file.

#### Features

- Create, read, update, and delete room types.
- Create, read, update, and delete rooms.
- Get all rooms with optional filtering by room type and price range.

#### API Endpoints

- **Room Types:**
  - `POST /api/v1/room-types`: Create a new room type.
  - `GET /api/v1/room-types`: Get all room types.

- **Rooms:**
  - `POST /api/v1/rooms`: Create a new room.
  - `GET /api/v1/rooms`: Get all rooms with optional filtering.
  - `GET /api/v1/rooms/:roomId`: Get a single room by ID.
  - `PATCH /api/v1/rooms/:roomId`: Update an existing room.
  - `DELETE /api/v1/rooms/:roomId`: Delete a room by ID.

#### Validation

Request validation is handled using `express-validator` middleware. Validation rules are defined for room types and rooms.

#### Contributing

Contributions are welcome!