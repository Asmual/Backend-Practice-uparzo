export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role?: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  role?: string;
}
