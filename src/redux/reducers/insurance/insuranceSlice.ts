import { insuranceMethods } from "@api/insuranceResponse";
import { ICreateInsuranceData } from "@models/common";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { message } from "antd";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
  insurance: {} as ICreateInsuranceData,
  isLoading: false,
  error: "",
};

export const insuranceSlice = createSliceWithThunks({
  name: "insuranceSlice",
  initialState,
  reducers: (create) => ({
    setInsurance: create.reducer(
      (state, { payload }: PayloadAction<ICreateInsuranceData>) => {
        state.insurance = payload;
      }
    ),

    createInsurance: create.asyncThunk<
      ICreateInsuranceData,
      ICreateInsuranceData,
      { rejectValue: string }
    >(
      async (payload, { rejectWithValue }) => {
        try {
          const { data } = await insuranceMethods.create(
            "/api/insurance/create",
            payload
          );
          return data;
        } catch (error: any) {
          return rejectWithValue(
            error.message || "Произошла ошибка при создании страховки"
          );
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (
          state,
          { payload }: PayloadAction<ICreateInsuranceData>
        ) => {
          state.insurance = payload;
          state.isLoading = false;
          message.success('Страховой продукт создан!')
        },
        rejected: (state, { payload }: PayloadAction<string | undefined>) => {
          state.error = payload || "Неизвестная ошибка";
          state.isLoading = false;
          message.error(state.error);
        },
      }
    ),
  }),
});

export const insuranceReducer = insuranceSlice.reducer;
export const {createInsurance} = insuranceSlice.actions;
