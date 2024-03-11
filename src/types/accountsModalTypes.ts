export enum AccountModalTypes {
  LOGIN = "LOGIN",
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  FORGOT = "FORGOT",
}

export interface ResponseUserType {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  blocked: false;
  confirmed: true;
  createdAt: string;
  provider: string;
  updatedAt: string;
}
