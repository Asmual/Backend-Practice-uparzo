import { ILoginPayload, IUserResponse } from "./auth.types.js";

// Mock user store for demonstration
const mockUser = {
  id: "usr_101",
  name: "Refat",
  email: "refat@gmail.com",
  password: "1234",
};

const login = (payload: ILoginPayload): IUserResponse => {
  const { email, password } = payload;

  if (mockUser.email !== email) {
    throw new Error("User not found with this email");
  }

  if (mockUser.password !== password) {
    throw new Error("Invalid credentials provided");
  }

  return {
    id: mockUser.id,
    name: mockUser.name,
    email: mockUser.email,
  };
};

export const authService = {
  login,
};
