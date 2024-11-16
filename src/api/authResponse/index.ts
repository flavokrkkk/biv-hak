import { axiosForAuth } from "@api/interceptors";
import { IAuthRequestData, IRegisterRequestData } from "@models/common";
import { AxiosResponse } from "axios";

export const authMethods = {
  register: (
    url: string,
    body: IRegisterRequestData
  ): Promise<AxiosResponse<any>> => axiosForAuth.post(url, body),
  authorizate: (
    url: string,
    body: IAuthRequestData
  ): Promise<AxiosResponse<any>> => axiosForAuth.post(url, body),
};
