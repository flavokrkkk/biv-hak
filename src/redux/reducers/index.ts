import { partnersActions, partnersReducer } from "./partners/partners-slice";

export const reducers = {
  partnersReducer,
};

export const actions = {
  ...partnersActions,
};
