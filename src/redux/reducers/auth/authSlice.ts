import { authMethods } from "@api/authResponse";
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
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  error: "",
  isLoading: false,
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
    getRefreshInfo: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await authMethods.refreshInfo("/api/company/self");
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.user = payload;
        },
      }
    ),
  }),
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
