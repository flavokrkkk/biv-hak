import { axiosForAuth, axiosWithAuth } from "@api/interceptors";
import {
  IAuthRequestData,
  ICreateInsuranceData,
  IInsuranceRequestData,
  IInsuranceResponseData,
  IRegisterRequestData,
} from "@models/common";
import { AxiosResponse } from "axios";

export const insuranceMethods = {
  create: (
    url: string,
    body: ICreateInsuranceData
  ): Promise<AxiosResponse<any>> => axiosWithAuth.post(url, body),
  getAgentInsurance: (
    url: string,
    agentId: number
  ): Promise<AxiosResponse<any>> =>
    axiosWithAuth.get(`${url}?agentId=${agentId}`),
  getAllInsurance: (
    url: string,
    companyId: number
  ): Promise<AxiosResponse<Array<IInsuranceResponseData>>> =>
    axiosWithAuth.get(url, { params: { companyId: companyId } }),
  getInsuranceById: (
    urL: string,
    insuranceId: number
  ): Promise<AxiosResponse<IInsuranceResponseData>> =>
    axiosWithAuth.get(urL, { params: { insuranceId: insuranceId } }),
  setInsuranceUpdate: (url: string, body: IInsuranceRequestData) =>
    axiosWithAuth.put(url, body),
  deleteInsurance: (url: string, insuranceId: number) =>
    axiosWithAuth.delete(url, { params: { insuranceId: insuranceId } }),
};
