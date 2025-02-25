# Inkspiff Demo API

Welcome to the **Inkspiff Demo API Repository**! This project is a TypeScript-based backend service designed to handle contact-related operations efficiently. It utilizes **Prisma** as an ORM for seamless database interactions and follows the MVC architecture principles for a clean separation of concerns.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Identify contacts by email or phone number.
- Retrieve all contacts based on search criteria.
- Clear all contacts securely with password protection.

## Technologies Used
- **TypeScript**: For type safety and modern JavaScript features.
- **Node.js**: As the runtime environment.
- **Express**: For building the RESTful API.
- **Prisma**: As the ORM for database interactions.

## Getting Started
To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Inkspiff/inkspiff-demo-api-repo.git
   cd inkspiff-demo-api-repo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your environment variables**:
   Create a `.env` file in the root directory and add your database connection string:
   ```plaintext
   DATABASE_URL=your_database_url
   CLEAR_PASSWORD=your_secure_password
   ```

4. **Run the application**:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

## API Endpoints
### Identify Contact
- **POST** `/identify`
  - Request Body: `{ "email": "string", "phoneNumber": "string" }`
  - Description: Identifies a contact based on email or phone number.

### Get All Contacts
- **GET** `/identify`
  - Query Parameters: `email`, `phoneNumber`
  - Description: Retrieves all contacts matching the criteria.

### Clear All Contacts
- **DELETE** `/identify`
  - Query Parameters: `email`, `phoneNumber`, `password`
  - Description: Clears all contacts matching the criteria if the correct password is provided.

## Code Structure
The project is organized into the following directories:
- **controllers/**: Contains the logic for handling requests and responses.
- **services/**: Contains business logic and interactions with the database.
- **routes/**: Defines the API endpoints and their corresponding controllers.
- **config/**: Configuration files, including Prisma setup.
- **prisma/**: Contains the Prisma schema for database modeling.

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
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore the code and contribute to the project!