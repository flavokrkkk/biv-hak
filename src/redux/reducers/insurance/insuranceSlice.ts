import { insuranceMethods } from "@api/insuranceResponse";
import { ICreateInsuranceData, IInsurance } from "@models/common";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { message } from "antd";
import { insurancedata } from "../../../utils/insurancedata";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export interface InsuranceState {
  insurances: IInsurance[];
  insurancesFilter: IInsurance[];
  insurance: ICreateInsuranceData | null;
  isLoading: boolean;
  error: string;
}

const initialState: InsuranceState = {
  insurance: null,
  insurancesFilter: insurancedata,
  insurances: insurancedata,
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
          message.success("Страховой продукт создан!");
        },
        rejected: (state, { payload }: PayloadAction<string | undefined>) => {
          state.error = payload || "Неизвестная ошибка";
          state.isLoading = false;
          message.error(state.error);
        },
      }
    ),
    setSearchInsurances: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.insurancesFilter = state.insurances.filter(
          ({ name: stringSearch }) => {
            return stringSearch.toLowerCase().includes(payload.toLowerCase());
          }
        );
      }
    ),
    setFilterInsurances: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        console.log(payload);
        state.insurancesFilter = state.insurances.filter((el) =>
          Object.values(el).includes(payload)
        );
      }
    ),
  }),
});

export const insuranceReducer = insuranceSlice.reducer;
export const insuranceActions = insuranceSlice.actions;
