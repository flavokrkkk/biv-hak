import { RootState } from "@store/store";

export const partnersSelector = (state: RootState) => state.partnersReducer;
export const insureSelector = (state: RootState) => state.insuranceReducer;
export const authSelector = (state: RootState) => state.authReducer;
