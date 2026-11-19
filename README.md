# Backend-Practice-uparzo

A modular, scalable, and production-ready backend practice project built using **Node.js**, **Express 5**, **TypeScript**, and **pnpm**.

---

## 🛠 Tech Stack

- **Runtime:** Node.js (ESM `nodenext`)
- **Framework:** Express 5
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Dev Runner:** tsx (TypeScript execution & hot-reload)
- **Utilities:** cors, dotenv, cookie-parser

---

## 📂 Project Structure

```text
├── src/
│   ├── config/
│   │   └── env.config.ts            # Environment variable configuration
│   ├── middleware/
│   │   ├── globalErrorHandler.ts    # Centralized global error handling
│   │   └── notFound.ts              # 404 Route Not Found middleware
│   ├── modules/
│   │   └── auth/
│   │       ├── auth.types.ts         # Data transfer interfaces and types
│   │       ├── auth.service.ts       # Core business logic with ApiError
│   │       ├── auth.controller.ts    # Request & response handler with catchAsync & ApiResponse
│   │       └── auth.route.ts         # Route definitions
│   ├── routes/
│   │   └── routes.ts                # Centralized module router pipeline (/api/v1)
│   ├── types/
│   │   └── index.ts                 # Global type definitions & ErrorResponse
│   ├── utils/
│   │   ├── ApiError.ts              # Custom API error class
│   │   ├── ApiResponse.ts           # Standard API response utility
│   │   └── catchAsync.ts            # Async controller wrapper
│   ├── app.ts                        # Express application & middleware setup
│   └── server.ts                     # Server bootstrap & graceful shutdown
├── .env.example                      # Sample environment file
├── .gitignore                        # Git ignore definitions
├── package.json                      # Dependencies & scripts
├── pnpm-workspace.yaml               # Build script permissions
└── tsconfig.json                     # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
pnpm dev
```

---

## 📡 API Endpoints

### 1. Health Check
- **Method:** `GET`
- **URL:** `http://localhost:5000/`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Server is running on port 5000"
  }
  ```

### 2. User Login
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/v1/auth/login`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "email": "refat@gmail.com",
    "password": "1234"
  }
  ```
- **Response (Success - 200):**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "id": "usr_101",
      "name": "refat",
      "email": "refat@gmail.com"
    }
  }
  ```
- **Response (Error - 404/401):**
  ```json
  {
    "success": false,
    "message": "User not found"
  }
  ```
