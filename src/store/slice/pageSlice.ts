import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pageType = "LANDING" | "QUESTION" | "LOADING" | "RESULT";

const initialState: pageType = "LANDING";

const pageSlice = createSlice({
  name: "page",
  initialState: initialState as pageType,
  reducers: {
    navigate(state, action: PayloadAction<pageType>) {
      return action.payload;
    },
  },
});

export const { navigate } = pageSlice.actions;
export default pageSlice.reducer;
