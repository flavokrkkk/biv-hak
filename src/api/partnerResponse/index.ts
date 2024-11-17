import { axiosForAuth, axiosWithAuth } from "@api/interceptors";
import {
  IAuthRequestData,
  IAuthResponseData,
  IPartner,
  IRegisterRequestData,
} from "@models/common";
import { AxiosResponse } from "axios";

export const partnerMethods = {
  linkToCompany: (
    url: string,
    body: { agentName: string }
  ): Promise<AxiosResponse<any>> => axiosWithAuth.post(url, body),
  
  getAgent: (url: string, agentId: number): Promise<AxiosResponse<IPartner>> =>
    axiosWithAuth.get(`${url}?agentId=${agentId}`),

  getAllAgents: (url: string): Promise<AxiosResponse<Array<IPartner>>> =>
    axiosWithAuth.get(url),

  update:(url: string,data:any):Promise<AxiosResponse<Array<any>>> => {
    // axiosWithAuth.
  }
};
