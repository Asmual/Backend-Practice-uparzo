import { ApiError } from "../../utils/ApiError.js";
import { ILoginPayload, IUserResponse } from "./auth.types.js";

const mockUser = {
  id: "usr_101",
  name: "refat",
  email: "refat@gmail.com",
  password: "1234",
};

const login = (payload: ILoginPayload): IUserResponse => {
  const { email, password } = payload;

  if (mockUser.email !== email) {
    throw new ApiError(404, "User not found");
  }

  if (mockUser.password !== password) {
    throw new ApiError(401, "Wrong Pass");
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
