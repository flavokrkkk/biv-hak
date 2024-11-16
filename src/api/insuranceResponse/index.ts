import { axiosForAuth, axiosWithAuth } from "@api/interceptors";
import { IAuthRequestData, ICreateInsuranceData, IRegisterRequestData } from "@models/common";
import { AxiosResponse } from "axios";

export const insuranceMethods = {
  create: (
    url: string,
    body: ICreateInsuranceData
  ): Promise<AxiosResponse<any>> => axiosWithAuth.post(url, body),

};
