import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import page from "./slice/pageSlice";
import appConfig from "./slice/appConfigSlice";
import userResponse from "./slice/userResponseSlice";

const rootReducer = combineReducers({
  page,
  appConfig,
  userResponse,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
