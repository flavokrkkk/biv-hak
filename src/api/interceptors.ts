import { catchError } from "@helpers/error";
import { deleteTokens, getToken } from "@helpers/tokenHelper";
import { EBaseUrls } from "@utils/api";
import { EErrorsNames } from "@utils/errors";
import axios, { CreateAxiosDefaults } from "axios";

export const options: CreateAxiosDefaults = {
  baseURL: EBaseUrls.BASE_API_URL,
  headers: {
    ["Content-Type"]: "application/json",
  },
};

export const axiosForAuth = axios.create(options);

export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getToken();

  if (config && config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        catchError(error) === EErrorsNames.JWT_EXPIRED ||
        catchError(error) === EErrorsNames.JWT_MUST) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        //   await authService.getNewTokens()
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (catchError(error) === "jwt expired") deleteTokens();
      }
    }

    throw error;
  }
);
