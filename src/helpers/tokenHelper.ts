import { ETokens } from "@utils/token";
import cookies from "js-cookie";

export const deleteTokens = () => {
  cookies.remove(ETokens.ACCESS_TOKEN);
  cookies.remove(ETokens.REFRESH_TOKEN);
};

export const getToken = () => cookies.get(ETokens.ACCESS_TOKEN) ?? "";

export const saveTokens = (access: string, refresh: string) => {
  cookies.set(ETokens.ACCESS_TOKEN, access);
  cookies.set(ETokens.REFRESH_TOKEN, refresh);
};
