export interface INavigateData {
  id: number;
  title: string;
  pathname: string;
}

export interface IRegisterRequestData {
  username: string;
  email: string;
  password: string;
}

export interface IAuthRequestData {
  username: string;
  password: string;
}
