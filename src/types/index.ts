export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};
