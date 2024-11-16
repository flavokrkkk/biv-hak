import { IAuthResponseData } from "@models/common";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export interface AuthState {
  user: IAuthResponseData | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSliceWithThunks({
  name: "authSlice",
  initialState,
  reducers: (create) => ({
    saveData: create.reducer(
      (state, { payload }: PayloadAction<IAuthResponseData>) => {
        state.user = payload;
      }
    ),
  }),
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
