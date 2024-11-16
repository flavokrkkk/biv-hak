import { IPartner } from "@models/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { partnersData } from "@utils/partnersdata";

export interface PartnersState {
  partners: Array<IPartner>;
  selectPartner: IPartner | null;
}

const initialState: PartnersState = {
  partners: partnersData,
  selectPartner: null,
};

export const partnersSlice = createSlice({
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
  }),
});

export const partnersActions = partnersSlice.actions;
export const partnersReducer = partnersSlice.reducer;
