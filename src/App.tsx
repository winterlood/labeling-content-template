import { useEffect } from "react";
import "./App.scss";

import Aos from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/createStore";

import resultData from "data/result.json";

import QuestionPage from "page/QuestionPage";
import ResultPage from "page/ResultPage";
import LandingPage from "page/LandingPage";
import LoadingPage from "page/LoadingPage";

import { goResultWithParam } from "store/slice/userResponseSlice";
import { navigate } from "store/slice/pageSlice";

function AppRouter() {
  const appConfig = useSelector((state: RootState) => state.appConfig);
  const page = useSelector((state: RootState) => state.page);

  const dispatch = useAppDispatch();

  // RESULT 바로가기 지원 위함
  if (window.location.search) {
    const params = window.location.search.split("?")[1];
    const resultSplit = params.split("result=")[1];
    if (resultSplit) {
      const resultValue: number = parseInt(resultSplit.split("&")[0]);
      if (1 <= resultValue && resultValue <= resultData.length) {
        if (appConfig.testType === "SCORE") {
          const targetResultMin = resultData[resultValue - 1].min;
          dispatch(goResultWithParam(new Array(targetResultMin).fill(1)));
        } else {
          dispatch(goResultWithParam(new Array(1).fill(resultValue)));
        }
        if (page !== "RESULT") {
          dispatch(navigate("RESULT"));
        }
      }
    }
  }

  switch (page) {
    case "LANDING":
      return <LandingPage />;
    case "QUESTION":
      return <QuestionPage />;
    case "LOADING":
      return <LoadingPage />;
    case "RESULT":
      return <ResultPage />;
    default:
      return <LandingPage />;
  }
}

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: -10,
    });
  }, []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
