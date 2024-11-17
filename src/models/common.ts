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

export interface IInsuranceResponseData {
  id: number;
  companyId: number;
  name: string;
  description: string;
  objectInsurance: string;
  riskInsurance: string;
  conditionsInsurance: string;
  maxAmount: number;
  amount: number;
  expiresIn: string;
  duration: number;
  agents: [
    {
      id: number;
      username: string;
      email: string;
      permissions: Array<string>;
    }
  ];
}

export interface IInsuranceRequestData {
  id: number;
  companyId: number;
  name: string;
  description: string;
  objectInsurance: string;
  riskInsurance: string;
  conditionsInsurance: string;
  maxAmount: number;
  amount: number;
  expiresIn: string;
  duration: number;
  agents: [
    {
      agentId: number;
      permissions: Array<string>;
    }
  ];
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
  username: string;
  email: string;
  insurances: [
    {
      id: number;
      companyId: number;
      name: string;
      description: string;
      objectInsurance: string;
      riskInsurance: string;
      conditionsInsurance: string;
      maxAmount: number;
      amount: number;
      expiresIn: string;
      duration: number;
      agents: [
        {
          id: number;
          username: string;
          email: string;
          permissions: ["CREATE_INSURANCE"];
        }
      ];
    }
  ];
}

export interface IFilterParam {
  key: string;
  value: string;
}
