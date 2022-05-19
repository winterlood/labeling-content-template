import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questionData from "data/question.json";

interface IUserResponse {
  step: number;
  pickPoint: number[];
}

const initialState: IUserResponse = {
  step: 0,
  pickPoint: [],
};

const userResponseSlice = createSlice({
  name: "userResponse",
  initialState,
  reducers: {
    goPrev(state) {
      return {
        ...state,
        step: state.step - 1,
      };
    },
    goNext(state, action: PayloadAction<number[] | number>) {
      return {
        step: state.step + 1,
        pickPoint: Array.isArray(action.payload)
          ? [...state.pickPoint, ...action.payload]
          : [...state.pickPoint, action.payload],
      };
    },
    goResultWithParam(_, action: PayloadAction<number[]>) {
      return {
        step: questionData.length,
        pickPoint: action.payload,
      };
    },
  },
});

export const { goPrev, goNext, goResultWithParam } = userResponseSlice.actions;
export default userResponseSlice.reducer;
