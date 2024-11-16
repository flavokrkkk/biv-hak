export interface INavigateData {
  id: number;
  title: string;
  pathname: string;
  icon: JSX.Element;
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

export interface IAuthResponseData {
  refreshToken: string;
  id: 0;
  username: string;
  email: string;
  role: string;
  accessToken: string;
  tokenType: string;
}

export interface ICreateInsuranceData {
  name: string;
  description: string;
  objectInsurance: string;
  riskInsurance: string;
  conditionsInsurance: string;
  maxAmount: number;
  amount: number;
  expiresIn: Date | null;
  duration: number;
  companyId: number;
}

export interface IInsurance {
  id: number;
  name: string;
  number: number;
  expiresIn: string | null;
  objectInsurance: string;
  amount: string;
  conditionsInsurance: string;
}

export interface IPartner {
  id: number;
  name: string;
  city: string;
  standing: string;
  statusDeal: string;
}
