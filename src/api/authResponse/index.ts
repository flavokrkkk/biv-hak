import { axiosForAuth } from "@api/interceptors";
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
};
