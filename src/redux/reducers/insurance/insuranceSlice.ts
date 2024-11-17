import { insuranceMethods } from "@api/insuranceResponse";
import {
  ICreateInsuranceData,
  IFilterParam,
  IInsurance,
  IInsuranceResponseData,
} from "@models/common";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { message } from "antd";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export interface InsuranceState {
  insurances: IInsuranceResponseData[];
  selectInsurance: IInsuranceResponseData | null;
  insurancesFilter: IInsuranceResponseData[];
  insurance: ICreateInsuranceData | null;
  filterParam: Array<IFilterParam>;
  isLoading: boolean;
  error: string;
}

const initialState: InsuranceState = {
  insurance: null,
  selectInsurance: null,
  insurancesFilter: [],
  insurances: [],
  isLoading: false,
  filterParam: [],
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

    getInsurance: create.asyncThunk(
      async (companyId: number, { rejectWithValue }) => {
        try {
          const { data } = await insuranceMethods.getAllInsurance(
            "/api/insurance/getall",
            companyId
          );
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
          state.isLoading = false;
          state.insurances = payload;
          state.insurancesFilter = payload;
        },
        rejected: (state) => {
          state.isLoading = false;
          state.error = "Invalid request!";
        },
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
    getInsurancesById: create.asyncThunk(
      async (insuranceId: number, { rejectWithValue }) => {
        try {
          const { data } = await insuranceMethods.getInsuranceById(
            "/api/insurance/get",
            insuranceId
          );
          return data;
        } catch (e) {
          return rejectWithValue(`${e}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.selectInsurance = payload;
          state.isLoading = false;
        },
        rejected: (state, { payload }) => {
          state.error = "Invalid reques";
          state.isLoading = false;
        },
      }
    ),
    setInsuranceUpdate: create.asyncThunk(
      async (requestData: IInsuranceResponseData, { rejectWithValue }) => {
        try {
          const { data } = await insuranceMethods.setInsuranceUpdate(
            `/api/insurance/update?insuranceId=${requestData.id}`,
            requestData
          );
          return data;
        } catch (e) {
          return rejectWithValue(`${e}`);
        }
      }
    ),

    deleteInsurance: create.asyncThunk(
      async (insuranceId: number, { rejectWithValue }) => {
        try {
          const { data } = await insuranceMethods.deleteInsurance(
            "/api/insurance/delete",
            insuranceId
          );
          return { data, insuranceId };
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.insurancesFilter = state.insurancesFilter.filter(
            (el) => el.id !== payload.insuranceId
          );
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Invalid request!";
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
    setFilterInsurances: create.reducer((state) => {
      state.insurancesFilter = state.insurances.filter((insurance) => {
        return state.filterParam.every(
          (el) => insurance[el.key as keyof typeof insurance] === el.value
        );
      });
    }),
    setFilterParam: create.reducer(
      (state, { payload }: PayloadAction<IFilterParam>) => {
        const searchIndex = state.filterParam.findIndex(
          (el) => el.key === payload.key
        );
        if (searchIndex !== -1) {
          state.filterParam[searchIndex] = payload;
        } else {
          state.filterParam.push(payload);
        }
      }
    ),
    setCleanFilter: create.reducer((state) => {
      state.insurancesFilter = state.insurances;
    }),
    setSelectInsurances: create.reducer(
      (state, { payload }: PayloadAction<IInsuranceResponseData["id"]>) => {
        const findIndex = state.insurances.findIndex(
          (insurance) => insurance.id === payload
        );

        if (findIndex !== -1) {
          state.selectInsurance = state.insurances[findIndex];
        }
      }
    ),
  }),
});

export const insuranceReducer = insuranceSlice.reducer;
export const insuranceActions = insuranceSlice.actions;
