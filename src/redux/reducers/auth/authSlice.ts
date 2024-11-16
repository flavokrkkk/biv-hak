import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  user: {},
};

export const authSlice = createSliceWithThunks({
  name: "authSlice",
  initialState,
  reducers: (create) => ({
    saveData: create.reducer((state,payload:any) => {
        state.user = payload
    }),
  }),
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
