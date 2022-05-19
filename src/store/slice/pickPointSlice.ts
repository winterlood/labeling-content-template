import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PickPointType = number[];

const initialState: PickPointType = [];

const pickPointSlice = createSlice({
  name: "pickPoint",
  initialState,
  reducers: {
    addPoint(state, action: PayloadAction<number | number[]>) {
      if (Array.isArray(action.payload)) {
        return state.concat(action.payload);
      } else {
        state.push(action.payload);
        return state;
      }
    },
  },
});

export const { addPoint } = pickPointSlice.actions;
export default pickPointSlice.reducer;
