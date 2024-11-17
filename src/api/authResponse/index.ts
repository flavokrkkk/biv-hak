import { axiosForAuth, axiosWithAuth } from "@api/interceptors";
import {
  IAuthRequestData,
  IAuthResponseData,
  IRegisterRequestData,
} from "@models/common";
import { AxiosResponse } from "axios";

export const authMethods = {
  register: (
    url: string,
    body: IRegisterRequestData
  ): Promise<AxiosResponse<IAuthResponseData>> => axiosForAuth.post(url, body),
  authorizate: (
    url: string,
    body: IAuthRequestData
  ): Promise<AxiosResponse<IAuthResponseData>> => axiosForAuth.post(url, body),
  refreshToken: (url: string, body: { refreshToken: string }) =>
    axiosForAuth.post(url),
  refreshInfo: (url: string): Promise<AxiosResponse<IAuthResponseData>> =>
    axiosWithAuth.get(url),
};
