export interface UserData {
  user: User;
  iat: number;
  exp: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
