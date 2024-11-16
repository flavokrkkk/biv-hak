import { axiosForAuth, axiosWithAuth } from "@api/interceptors";
import {
  IAuthRequestData,
  IAuthResponseData,
  IRegisterRequestData,
} from "@models/common";
import { AxiosResponse } from "axios";

export const partnerMethods = {
  linkToCompany: (
    url: string,
    body: {agentName:string}
  ): Promise<AxiosResponse<IAuthResponseData>> => axiosWithAuth.post(url, body),
  
};
