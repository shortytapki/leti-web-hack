export interface User {
  username: string;
  password: string;
  email: string;
}

export interface UserSchema {
  authData: User | undefined;
  error: string | undefined;
  isLoading: boolean;
}
