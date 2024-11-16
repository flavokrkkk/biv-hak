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
    getAccessToken: create.asyncThunk(async () => {
      try {
      } catch (err) {}
    }),
  }),
});
