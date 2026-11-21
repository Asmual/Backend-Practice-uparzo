import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.config.js";
import { ApiError } from "../../utils/ApiError.js";
import { ILoginPayload, IRegisterUser, IUserResponse } from "./auth.types.js";

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

const registerUser = async (payload: IRegisterUser) => {
  const isExistUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (isExistUser) {
    throw new ApiError(StatusCodes.CONFLICT, "User already exist");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    },
    omit: {
      password: true,
    },
  });

  return newUser;
};

export const authService = {
  login,
  registerUser,
};
