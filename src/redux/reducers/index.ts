import { authActions, authReducer } from "./auth/authSlice";
import { insuranceActions, insuranceReducer } from "./insurance/insuranceSlice";
import { partnersActions, partnersReducer } from "./partners/partners-slice";

export const reducers = {
  partnersReducer,
  authReducer,
  insuranceReducer,
};

export const actions = {
  ...partnersActions,
  ...authActions,
  ...insuranceActions,
};
