import { authActions, authReducer } from "./auth/authSlice";
import { partnersActions, partnersReducer } from "./partners/partners-slice";

export const reducers = {
  partnersReducer,
  authReducer,
};

export const actions = {
  ...partnersActions,
  ...authActions,
};
