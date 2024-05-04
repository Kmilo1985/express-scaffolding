# Express TypeScript API Project

This project is an API built with Express and TypeScript. It is designed following the MVC architecture, although it does not include views, it only returns JSON. It uses TypeORM as an ORM to interact with the database.

## Characteristics

- **Express and TypeScript:** Developed using Express.js and TypeScript for cleaner and more maintainable code.
- **MVC Architecture:** Organized following the Model-View-Controller pattern for a better project structure.
- **API only:** Focuses on creating RESTful APIs, does not include HTML views.
- **TypeORM:** Uses TypeORM to manage database operations in a simple and TypeScript-compatible way.
- **Docker:** Includes a Dockerfile and a docker-compose.yaml file to make it easier to create and run the development environment.
- **Vine.js:** Used to perform validations in the project.

## Setting

1. Copy the `.env.example` file and rename it to `.env`. Make sure you fill in the environment variables according to your needs.

2. Run the following command to start the project:

``npm run docker:run``

This will create and run the Docker containers required to run the application.

3. To stop the containers, you can run:

``npm run docker:down``

## Migrations

To run the database migrations, you can use the following command:

``npm run migration:run``

This will apply all pending migrations and update the database according to the model defined in the project.

## Project Structure

The project structure is as follows:

- **app/**: Contains the source code of the application.
- **build/**: Directory where transpiled TypeScript files are stored.
- **compose/**: Directory containing Docker related files (Dockerfile, docker-compose.yml).
- **database/**: Directory containing the database migrations.