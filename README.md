# Inkspiff Demo API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the **Inkspiff Demo API Repository**! This project is a robust and efficient TypeScript-based backend service meticulously designed to handle contact-related operations. Leveraging the power of **Prisma** as an ORM, it ensures seamless database interactions. Adhering to the principles of MVC architecture, the codebase maintains a clean separation of concerns, promoting maintainability and scalability.

> A well-structured and type-safe API for managing contacts, built with modern technologies.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

*   **Contact Identification**: Identify contacts by email or phone number with intelligent linking.
*   **Contact Retrieval**: Retrieve all contacts based on flexible search criteria.
*   **Secure Contact Clearing**: Clear all contacts securely with password protection.
*   **Robust Validation**: Comprehensive input validation to ensure data integrity.
*   **Error Handling**: Centralized error handling for consistent API responses.
*   **Database Management**: Utilizes Prisma for efficient database schema management and migrations.

## Technologies Used

*   **TypeScript**: For enhanced type safety and modern JavaScript features.
*   **Node.js**: As the runtime environment, providing scalability and performance.
*   **Express**: For building a RESTful API with middleware support.
*   **Prisma**: As the ORM, simplifying database interactions and schema management.
*   **CORS**: Cross-Origin Resource Sharing for secure API access from different domains.
*   **dotenv**: Zero-dependency module that loads environment variables from a `.env` file.

## Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Inkspiff/inkspiff-demo-api-repo.git
    cd inkspiff-demo-api-repo
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up your environment variables**:

    Create a `.env` file in the root directory and configure the following variables:

    ```plaintext
    DATABASE_URL=your_database_url
    CLEAR_PASSWORD=your_secure_password
    ```

    > **Note**: Ensure your `DATABASE_URL` points to a valid PostgreSQL database.

4.  **Run database migrations**:

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Start the application**:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

### Identify Contact

*   **POST** `/identify`
    *   Request Body: `{ "email": "string", "phoneNumber": "string" }`
    *   Description: Identifies a contact based on email or phone number, linking them if necessary.
    *   Response:
        ```json
        {
          "primaryContactId": 123,
          "emails": ["primary@example.com", "secondary@example.com"],
          "phoneNumbers": ["123-456-7890", "098-765-4321"],
          "secondaryContactIds": [456, 789]
        }
        ```

### Get All Contacts

*   **GET** `/identify`
    *   Query Parameters: `email`, `phoneNumber`
    *   Description: Retrieves all contacts matching the provided email or phone number.
    *   Response:
        ```json
        [
          {
            "id": 1,
            "phoneNumber": "123-456-7890",
            "email": "test@example.com",
            "linkedId": null,
            "linkPrecedence": "primary",
            "createdAt": "2024-01-01T00:00:00.000Z",
            "updatedAt": "2024-01-01T00:00:00.000Z",
            "deletedAt": null
          }
        ]
        ```

### Clear All Contacts

*   **DELETE** `/identify`
    *   Query Parameters: `email`, `phoneNumber`, `password`
    *   Description: Clears all contacts matching the criteria if the correct password is provided.
    *   Response:
        ```json
        {
          "message": "All contacts have been cleared"
        }
        ```

## Code Structure

The project is organized into the following directories:

*   **`controllers/`**: Contains the logic for handling incoming requests and generating responses.
*   **`services/`**: Contains the business logic and interacts with the database through Prisma.
*   **`routes/`**: Defines the API endpoints and their corresponding controller functions.
*   **`config/`**: Configuration files, including the Prisma client setup.
*   **`prisma/`**: Contains the Prisma schema for database modeling and migrations.
*   **`utils/`**: Utility functions such as custom error classes and validation helpers.

### Example Code Snippets

#### Prisma Configuration

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

#### Contact Controller

```typescript
export const identify = async (req: any, res: any) => {
  try {
    const { email, phoneNumber } = req.body;
    const result = await identifyContact(email || null, phoneNumber || null);
    res.json({ contact: result });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
```

#### Prisma Schema

```prisma
model Contact {
  id             Int            @id @default(autoincrement())
  phoneNumber    String?
  email          String?
  linkedId       Int?
  linkPrecedence LinkPrecedence @default(primary)
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
  deletedAt      DateTime?
}

enum LinkPrecedence {
  primary
  secondary
}
```

## Contributing

Contributions are highly welcome! If you have suggestions for improvements or bug fixes, please:

1.  Fork the repository.
2.  Create a new branch for your feature or fix.
3.  Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any questions, issues, or support requests, please open an issue on the [GitHub repository](https://github.com/Inkspiff/inkspiff-demo-api-repo/issues).

---

Feel free to explore the code and contribute to the project! We appreciate your interest and support.
