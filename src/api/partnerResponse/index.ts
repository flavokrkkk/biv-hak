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
  ): Promise<AxiosResponse<IAuthResponseData>> => axiosWithAuth.post(url, body),
  getAllAgents: (url: string): Promise<AxiosResponse<Array<IPartner>>> =>
    axiosWithAuth.get(url),
};
