import { createSlice } from "@reduxjs/toolkit";
import configData from "data/config.json";

interface IConfig {
  testType: "SCORE" | "CLASSIFY";
  buttonType: "SOFT" | "ROUND" | "HARD";
  layout: "TEXT" | "IMAGE" | "VIDEO";
  color: {
    backgroundColor: string;
    accentColor: string;
    accentShadowColor: string;
  };
  animation: {
    type: string;
    duration: string;
  };
  title: string;
  subTitle: string;
  startButtonText: string;
}

const initialState: IConfig = {
  ...(configData as IConfig),
};

const configSlice = createSlice({
  name: "appConfig",
  initialState: initialState,
  reducers: {},
});

export default configSlice.reducer;
