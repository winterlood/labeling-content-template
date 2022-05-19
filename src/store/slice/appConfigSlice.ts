import { createSlice } from "@reduxjs/toolkit";

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
  testType: "CLASSIFY",
  buttonType: "SOFT",
  layout: "IMAGE",
  color: {
    backgroundColor: "white",
    accentColor: "rgb(255, 153, 204)",
    accentShadowColor: "rgba(255, 153, 204, 50%)",
  },
  animation: {
    type: "fade-up",
    duration: "1500",
  },
  title: "나의 봄나들이 패션스타일은?",
  subTitle: "벚꽃놀이 취향으로 보는 봄패션 MBTI",
  startButtonText: "테스트 시작하기",
};

const configSlice = createSlice({
  name: "appConfig",
  initialState: initialState,
  reducers: {},
});

export default configSlice.reducer;
