```markdown
# Project Context: Demo_Collins

This document outlines the context for the `Demo_Collins` project, providing an overview of its purpose, technical foundation, structure, and guiding principles.

## What this project does

The `Demo_Collins` project is a proof-of-concept application designed to demonstrate a modern web development stack. It serves as a basic task management system, allowing users to create, view, update, and delete tasks. Its primary function is to showcase full-stack development practices from frontend interaction to backend data persistence.

## Its tech stack and architecture

The project leverages a modern, opinionated full-stack setup:

*   **Frontend**: React with Next.js for server-side rendering, routing, and a streamlined development experience.
*   **Backend**: Node.js with NestJS for a robust, scalable, and modular API layer.
*   **Database**: PostgreSQL as the primary relational data store.
*   **Infrastructure**: Docker for local development containerization, ensuring consistent environments. GitHub Actions are configured for Continuous Integration.
*   **Architecture**: A monolithic application structure, with clear separation of concerns (controller, service, repository layers) within the NestJS backend and a well-defined component-based frontend.

## Key directories and their purpose

The project's structure is designed for clarity and maintainability:

*   `src/`: Contains the primary source code for both frontend and backend.
    *   `src/client/`: Frontend React/Next.js application code, including pages, components, and hooks.
    *   `src/server/`: Backend NestJS application code, containing modules, controllers, services, and entities.
    *   `src/common/`: Shared types, utility functions, and constants used across client and server.
*   `test/`: Houses all unit and integration tests for both client and server components and APIs.
*   `docs/`: Supplementary documentation, including API specifications (e.g., Swagger/OpenAPI) and design decisions.
*   `config/`: Environment-specific configuration files (e.g., database credentials, API keys).
*   `scripts/`: Automation scripts for common tasks such as build, dev server setup, and database migrations.
*   `.github/workflows/`: CI/CD pipeline definitions using GitHub Actions for automated testing and deployment.
*   `deploy/`: Deployment-related files, specifically Dockerfiles for container image creation.

## Important conventions or patterns

The following conventions and patterns are established and adhered to across the project:

*   **Coding Standards**: Strict adherence to ESLint and Prettier configurations for TypeScript/JavaScript, enforced by CI.
*   **Commit Message Guidelines**: Use of Conventional Commits to maintain a clear and searchable Git history, enabling automated changelog generation.
*   **Branching Strategy**: Trunk-based development with short-lived feature branches, merging frequently into `main` after code review and successful CI checks.
*   **API Design**: RESTful principles are applied for all backend API endpoints, using JSON for data exchange and standard HTTP status codes.
*   **Error Handling**: A standardized error response format for APIs, with centralized logging (e.g., via Winston or a similar library) for server-side errors.
*   **Testing Strategy**: Comprehensive unit tests for services, controllers, and frontend components, alongside integration tests for critical API endpoints, are mandatory.
*   **Documentation**: Commitment to keeping `README.md`, this `CONTEXT.md`, and relevant API documentation (e.g., Swagger UI) up-to-date and accurate.
```