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
│   │   └── env.config.ts        # Environment variable configuration
│   ├── modules/
│   │   └── auth/
│   │       ├── auth.types.ts     # Data transfer interfaces and types
│   │       ├── auth.service.ts   # Core business logic
│   │       ├── auth.controller.ts# Request & response handler
│   │       └── auth.route.ts     # Route definitions
│   ├── app.ts                    # Express application & middleware setup
│   └── server.ts                 # Server bootstrap & graceful shutdown
├── .env.example                  # Sample environment file
├── .gitignore                    # Git ignore definitions
├── package.json                  # Dependencies & scripts
├── pnpm-workspace.yaml           # Build script permissions
└── tsconfig.json                 # TypeScript compiler configuration
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
    "message": "Server is running smoothly"
  }
  ```

### 2. User Login
- **Method:** `POST`
- **URL:** `http://localhost:5000/auth/login`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "email": "refat@gmail.com",
    "password": "1234"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "id": "usr_101",
      "name": "Refat",
      "email": "refat@gmail.com"
    }
  }
  ```
