export type LoginResponse = {
  jwt: string;
  user: AuthUser;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};
