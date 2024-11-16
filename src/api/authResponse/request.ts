import { IAuthRequestData, IRegisterRequestData } from "@models/common";
import axios from "axios";
import { authMethods } from ".";
import { EAuthTypes } from "@utils/common";
import { IAuthResponseData } from "../../models/common";

export const registration = async (
  body: IRegisterRequestData,
  type: EAuthTypes
) => {
  try {
    const subdomain: Record<EAuthTypes, string> = {
      [EAuthTypes.AGENT]: "api/agent/signup",
      [EAuthTypes.COMPANY]: "/api/company/signup",
    };

    const { data, status } = await authMethods.register(
      subdomain[type] ?? "",
      body
    );
    return {
      data,
      status,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        message: err.response?.data.message,
        status: err.response?.status ?? 500,
        data: {} as IAuthResponseData,
      };
    } else {
      return {
        message: "Что то пошло не так",
        status: 500,
        data: {} as IAuthResponseData,
      };
    }
  }
};

export const authorizate = async (body: IAuthRequestData, type: EAuthTypes) => {
  try {
    const subdomain: Record<EAuthTypes, string> = {
      [EAuthTypes.AGENT]: "api/agent/signin",
      [EAuthTypes.COMPANY]: "/api/company/signin",
    };
    const { data, status } = await authMethods.authorizate(
      subdomain[type] ?? "",
      body
    );
    return {
      data,
      status,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        message: err.response?.data.message,
        status: err.response?.status ?? 500,
        data: {} as IAuthResponseData,
      };
    } else {
      return {
        message: "Что то пошло не так",
        status: 500,
        data: {} as IAuthResponseData,
      };
    }
  }
};
