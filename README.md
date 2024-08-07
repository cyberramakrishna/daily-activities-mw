# Daily Activities MW

This is the MW application for managing daily activities. The application is built using Node.js, Express.js, and TypeScript and connects to an Oracle database using TypeORM.

## Features

- Create, read, update, and delete daily activities.
- Logging with Winston.
- Centralized error handling.

## Project Structure

```sh
daily-activities-mw/
├── src/
│ ├── config/
│ │ ├── dbConfig.ts
│ ├── controllers/
│ │ └── activityController.ts
│ ├── entities/
│ │ └── Activity.ts
│ ├── middlewares/
│ │ └── errorHandler.ts
│ ├── routes/
│ │ └── activityRoutes.ts
│ ├── services/
│ │ ├── activityService.ts
│ ├── utils/
│ │ └── logger.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .eslintrc.js
├── ormconfig.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- Oracle Database
- OpenShift CLI (for deployment)

### Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your_username/daily-activities-backend.git
   cd daily-activities-backend
   ```

2. **Install Dependencies:**

   ```sh
   npm instll
   ```

3. **Create a .env File:**

   ```sh
   echo "DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_CONNECTION_STRING=your_db_connection_string" > .env
   ```

4. **Update ormconfig.json with your OracleDB connection details.**

### Running the Application

1.  **Build the Project:**

    ```sh
    npm run build
    ```

    Start the Server:

2.  **Start the Server:**
    ```sh
    npm start
    ```
3.  **Development Mode:**
    ```sh
    npm run dev
    ```

### API Endpoints

1. **Create Activity:**

   ```sh
   POST /api/activities
   ```

   Request Body:

   ```sh
   {
    "cr_sd": "ACT123",
    "activityDetails": "Details of the activity",
    "startTime": "2023-07-18T10:00:00Z",
    "endTime": "2023-07-18T12:00:00Z",
    "spoc": "John Doe",
    "status": "Pending",
    "outageType": "Planned",
    "activityType": "Maintenance",
    "addedBy": "admin"
    "createdAt": "2023-07-17T10:00:00Z",
    "updatedAt": "2023-07-19T10:00:00Z",
   }
   ```

   Response:

   ```sh
   {
    "activityId": "ACT123"
   }
   ```

2. **Read Activity:**

   ```sh
   GET /api/activities/:id
   ```

3. **Update Activity:**

   ```sh
   PUT /api/activities/:id
   ```

4. **Delete Activity:**

   ```sh
   DELETE /api/activities/:id
   ```
