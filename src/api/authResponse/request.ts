import { IAuthRequestData, IRegisterRequestData } from "@models/common";
import axios from "axios";
import { authMethods } from ".";
import { EAuthTypes } from "@utils/common";
import { IAuthResponseData } from "../../models/common";
import cookies from "js-cookie";

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

export const getNewToken = async () => {
  try {
    const subdomain: Record<EAuthTypes, string> = {
      [EAuthTypes.AGENT]: "api/agent/signin",
      [EAuthTypes.COMPANY]: "/api/company/signin",
    };
    const token = cookies.get("refresh_token") || "";
    const type = (cookies.get("type") || "") as EAuthTypes;

    const { data, status } = await authMethods.refreshToken(subdomain[type], {
      refreshToken: token,
    });
    if (status !== 200) {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      throw new Error("Invalid refresh token!");
    }

    return data;
  } catch (err) {}
};
