# Employee Management App

## Overview

Employee Management App is a web application designed to manage employee records efficiently. It provides functionalities to create, read, update, and delete employee records through a user-friendly interface.

### Features

- **View Employees**: Display a list of all employees.
- **Add Employee**: Add a new employee to the database.
- **Update Employee**: Modify existing employee details.
- **Delete Employee**: Remove an employee from the database.

## Technologies Used

### Backend

- **Java**: Backend programming language.
- **Spring Boot**: Framework for building RESTful APIs.
- **MySQL**: Database management system.
- **Hibernate**: Object-relational mapping library.

### Frontend

- **React**: Frontend JavaScript library.
- **Bootstrap**: CSS framework for responsive design.

## Backend API Endpoints

### GET /api/v1/employees

- **Description**: Retrieve all employees.
- **Example**: `http://localhost:8080/api/v1/employees`

### POST /api/v1/employees

- **Description**: Create a new employee.
- **Example Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john.doe@example.com"
  }
  ```

### GET /api/v1/employees/{id}

- **Description**: Retrieve an employee by ID.
- **Example**: `http://localhost:8080/api/v1/employees/1`

### PUT /api/v1/employees/{id}

- **Description**: Update an employee by ID.
- **Example Body**:
  ```json
  {
    "firstName": "Updated First Name",
    "lastName": "Updated Last Name",
    "emailId": "updated.email@example.com"
  }
  ```

### DELETE /api/v1/employees/{id}

- **Description**: Delete an employee by ID.
- **Example**: `http://localhost:8080/api/v1/employees/1`

## Frontend UI

The frontend of this application is built using React and Bootstrap. It provides a user interface to interact with the backend APIs seamlessly.

## How to Run

### Prerequisites

- Java Development Kit (JDK) installed
- Node.js and npm installed
- MySQL server installed

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samratghosh291/Employee-Management.git
   cd employee-management-app
   ```

2. **Backend Setup**:
   - Navigate to `backend` directory.
   - Configure `application.properties` with your MySQL database credentials.
   - Run the Spring Boot application:
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Frontend Setup**:
   - Navigate to `frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React application:
     ```bash
     npm start
     ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` to view the Employee Management App.

## Contributors

- [Samrat Ghosh](https://github.com/samratghosh291)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
