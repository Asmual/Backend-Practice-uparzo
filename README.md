# Backend Practice Project

A modular, scalable, and production-ready REST API boilerplate built with **Node.js**, **Express 5**, **TypeScript**, **PostgreSQL**, **Prisma 7**, and **Zod**.

---

## 🛠 Tech Stack

- **Runtime:** Node.js (ESM `nodenext`)
- **Framework:** Express 5
- **Language:** TypeScript
- **Database & ORM:** PostgreSQL (Neon) with Prisma 7 (`@prisma/adapter-pg`)
- **Validation:** Zod
- **Authentication & Security:** bcrypt, cors, cookie-parser
- **Package Manager:** pnpm
- **Dev Runner:** tsx

---

## 📂 Project Structure

```text
├── prisma/
│   ├── enum.prisma              # Application enums
│   ├── schema.prisma            # Datasource & client generator configuration
│   └── user.prisma              # User data model
├── src/
│   ├── config/
│   │   ├── env.config.ts        # Environment variable configuration
│   │   └── prisma.config.ts     # Prisma client instance with connection pooling
│   ├── middleware/
│   │   ├── globalErrorHandler.ts# Centralized error handler
│   │   ├── notFound.ts          # 404 Route Not Found handler
│   │   └── validateRequest.ts   # Zod request validation middleware
│   ├── modules/
│   │   └── auth/                # Authentication module (types, service, controller, routes, validation)
│   ├── routes/
│   │   └── routes.ts            # Centralized API router (/api/v1)
│   ├── types/
│   │   └── index.ts             # Global TypeScript types
│   ├── utils/
│   │   ├── ApiError.ts          # Custom API error class
│   │   ├── ApiResponse.ts       # Standardized response helper
│   │   └── catchAsync.ts        # Async error wrapper
│   ├── app.ts                   # Express application setup
│   └── server.ts                # Server bootstrap & graceful shutdown
├── .env.example                 # Example environment variables
├── package.json                 # Project dependencies & scripts
├── prisma7.config.ts            # Prisma 7 configuration file
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [pnpm](https://pnpm.io/) (`npm i -g pnpm`)
- PostgreSQL database (e.g., [Neon](https://neon.tech/))

### 2. Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### 3. Environment Configuration

Copy `.env.example` to `.env` and provide your database credentials:

```bash
cp .env.example .env
```

Example configuration:

```env
PORT=5000
NODE_ENVIRONMENT=development
DATABASE_URL="postgresql://neondb_owner:password@ep-your-endpoint-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
```

### 4. Database Setup

Push the Prisma schema to your PostgreSQL database:

```bash
pnpm exec prisma db push
```

### 5. Running the Application

```bash
# Start in development mode with hot-reload
pnpm dev

# Build for production
pnpm build
```

---

## 📡 API Endpoints

All API routes are prefixed under `/api/v1`.

### 1. Health Check
- **Method:** `GET`
- **URL:** `/`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Server is running on port 5000"
  }
  ```

### 2. User Registration
- **Method:** `POST`
- **URL:** `/api/v1/auth/register`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Register successful",
    "data": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createAt": "2026-11-21T00:00:00.000Z",
      "updateAt": "2026-11-21T00:00:00.000Z"
    }
  }
  ```

### 3. User Login
- **Method:** `POST`
- **URL:** `/api/v1/auth/login`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
