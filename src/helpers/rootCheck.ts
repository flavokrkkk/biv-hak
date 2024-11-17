import { EAuthTypes } from "@utils/common";
import cookies from "js-cookie";
export const rootCheck = () => {
  const type = cookies.get("type");
  if (type === EAuthTypes.COMPANY) {
    return true;
  }
  return false;
};
