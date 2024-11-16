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

export interface ICreateInsuranceData {
  name: string;
  description: string;
  typeInsurance: string;
  targetAudience: any[];
  objectInsurance: string;
  riskInsurance: string;
  conditionsInsurance: string;
  maxAmount: number;
  amount: number;
}
