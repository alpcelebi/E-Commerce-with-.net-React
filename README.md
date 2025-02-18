E-Commerce

Overview

This project is built using ASP.NET Core 9.0 and React, incorporating various modern technologies to ensure a robust and scalable application. It includes authentication, database integration, API documentation, and payment processing features.

Technologies Used

Backend:

ASP.NET Core 9.0 - Web API development

Entity Framework Core - Database management

SQLite - Lightweight database for local development

JWT Authentication - Secure user authentication

Microsoft Identity - Identity management

Iyzipay - Payment gateway integration

Swagger (Swashbuckle) - API documentation

Frontend:

React - UI development

React Router - Navigation management

Redux (optional) - State management

Axios - API communication

TailwindCSS / Bootstrap - Styling (if used)

Features

User Authentication: Secure login and registration with JWT tokens.

Database Management: Uses Entity Framework Core with SQLite.

Payment Processing: Integrated with Iyzipay for seamless transactions.

API Documentation: Swagger UI for easy API testing and documentation.

Modern UI: Built with React for a dynamic user experience.

Installation

Backend Setup:

Clone the repository:

git clone https://github.com/your-repository.git
cd your-project-folder

Install dependencies:

dotnet restore

Run the application:

dotnet run

Frontend Setup:

Navigate to the React project folder:

cd frontend

Install dependencies:

npm install

Start the development server:

npm start

API Documentation

Once the backend is running, you can access the API documentation at:

http://localhost:5000/swagger

Environment Variables

Create an .env file for the backend and frontend to configure necessary environment variables.

Backend .env Example:

JWT_SECRET=your_jwt_secret
DB_CONNECTION_STRING=your_database_connection_string
IYZIPAY_API_KEY=your_api_key
IYZIPAY_SECRET_KEY=your_secret_key

Frontend .env Example:

REACT_APP_API_URL=http://localhost:5000

Deployment

For production, configure your environment variables and use:

# Backend
 dotnet publish -c Release

# Frontend
 npm run build

Contributing

Contributions are welcome! Feel free to submit pull requests or report issues.
