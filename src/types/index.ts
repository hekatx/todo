export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

export type Todo = {
  id: number;
  userId: number;
  title: string;
  content: string;
};

export type User = {
  email: string;
  name: string;
  password: string;
  id: number;
};

export type Token = {
  email: string;
  iat: number;
  exp: number;
  sub: string;
};
