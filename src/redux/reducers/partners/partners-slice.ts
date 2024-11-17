import { partnerMethods } from "@api/partnerResponse";
import { IPartner } from "@models/common";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export interface PartnersState {
  partners: Array<IPartner>;
  filterPartners: Array<IPartner>;
  selectPartner: IPartner | null;
  isLoading: boolean;
  error: string;
}

const initialState: PartnersState = {
  partners: [],
  filterPartners: [],
  selectPartner: null,
  error: "",
  isLoading: false,
};

export const partnersSlice = createSliceWithThunks({
  name: "partnersSlice",
  initialState,
  reducers: (create) => ({
    setSelectPartner: create.reducer(
      (state, { payload }: PayloadAction<IPartner["id"]>) => {
        const findIndex = state.partners.findIndex(
          (partner) => partner.id === payload
        );
        if (findIndex !== -1) {
          state.selectPartner = state.partners[findIndex];
        }
      }
    ),
    setSearchPartner: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.filterPartners = state.partners.filter(
          ({ username: stringSearch }) => {
            return stringSearch.toLowerCase().includes(payload.toLowerCase());
          }
        );
      }
    ),
    getAllPartners: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await partnerMethods.getAllAgents(
            "/api/company/getagents"
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
          state.partners = payload;
          state.filterPartners = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Failed To Request!";
        },
      }
    ),
    getAgentById: create.asyncThunk(
      async (agentId: number, { rejectWithValue }) => {
        try {
          const { data } = await partnerMethods.getAgent(
            "/api/company/getagent",
            agentId
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
          state.selectPartner = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Failed To Request!";
          state.isLoading = false;
        },
      }
    ),
  }),
});

export const partnersActions = partnersSlice.actions;
export const partnersReducer = partnersSlice.reducer;
