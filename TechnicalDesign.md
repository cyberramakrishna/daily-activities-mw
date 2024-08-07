# Backend Technical Design Document

## 1. Introduction
- **Purpose**: Describe the purpose of this document.
- **Scope**: Define the scope of the backend application.
- **Definitions, Acronyms, and Abbreviations**: List and define any terms used in the document.

## 2. System Overview
- **System Architecture**: High-level architecture diagram and description.
- **Technologies Used**: Node.js, Express.js, node-oracledb, JWT, Winston, Mocha.

## 3. API Design
- **Base URL**: Define the base URL for the API.
- **Endpoints**:
  - **Create**: POST /api/activities
  - **Read**: GET /api/activities/:id
  - **Update**: PUT /api/activities/:id
  - **Delete**: DELETE /api/activities/:id
- **Request and Response Formats**: Describe the request and response formats for each endpoint.

## 4. Database Design
- **Schema**: 
  - **Table Name**: activities
  - **Columns**:
    - cr_sd (Primary Key)
    - activityDetails
    - startTime
    - endTime
    - spoc
    - status
    - outageType
    - activityType
    - addedBy
- **Connection Pooling**: Describe the connection pooling strategy using node-oracledb.

## 5. Authentication and Authorization
- **JWT Authentication**: Describe how JWT will be used for authentication.
- **Middleware**: Describe any middleware used for authentication and authorization.

## 6. Exception Handling
- **Types of Exceptions**: List and describe the types of exceptions that will be handled.
- **Exception Handling Strategy**: Describe how exceptions will be handled and how responses will be sent to the UI layer.

## 7. Logging
- **Logging Framework**: Winston
- **Logging Strategy**: Describe what will be logged and at what levels (info, error, etc.).

## 8. Testing
- **Testing Framework**: Mocha
- **Test Cases**: Describe the test cases for each API endpoint.
- **Test Strategy**: Describe the overall testing strategy, including unit tests and integration tests.

## 9. Deployment
- **Deployment Environment**: Describe the deployment environment and any dependencies.
- **Deployment Steps**: List the steps required to deploy the application.

## 10. Best Practices
- **Code Quality**: Describe best practices for maintaining code quality.
- **Security**: Describe best practices for ensuring the security of the application.
- **Performance**: Describe best practices for optimizing performance.

## 11. Maintenance and Support
- **Maintenance Plan**: Describe the plan for maintaining the application post-deployment.
- **Support Resources**: List any support resources available for the application.

## 12. Appendices
- **Glossary**: Define any additional terms used in the document.
- **References**: List any references or external documents used in the creation of this document.
