import React from "react";
import style from "./QuestionPage.module.scss";
import { useSelector } from "react-redux";
import questionData from "data/question.json";

import { RootState, useAppDispatch } from "store/createStore";
import { navigate } from "store/slice/pageSlice";
import { goNext } from "store/slice/userResponseSlice";

import ProgressBar from "components/ProgressBar/ProgressBar";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";

export interface QuestionPageProps {}
const questionLength = questionData.length;

const QuestionPage: React.FC<QuestionPageProps> = (
  props: QuestionPageProps
) => {
  const { color, layout } = useSelector((v: RootState) => v.appConfig);
  const { step } = useSelector((v: RootState) => v.userResponse);
  const dispatch = useAppDispatch();

  const curQuestion = questionData[step];

  // 질문지 로직
  const handleClickAnswer = (point: number | number[]) => {
    dispatch(goNext(point));
    if (step + 1 === questionLength) {
      dispatch(navigate("LOADING"));
    }
  };

  return (
    <div className={style.container}>
      {/* LOGO */}
      {layout === "TEXT" && (
        <section className={style.section_logo}>
          <Logo />
        </section>
      )}

      {/* PROGRESS */}
      <section className={style.section_progress}>
        <ProgressBar step={step} maxStep={questionLength} />
      </section>

      {/* IMAGE */}
      {layout !== "TEXT" && (
        <section className={style.section_question_img}>
          <img
            alt="questionimage"
            src={
              process.env.PUBLIC_URL + `/assets/img/question_${step + 1}.png`
            }
          />
        </section>
      )}

      {/* QUESTION */}
      <section className={style.section_question}>
        <div className={style.question_count}>
          <div className={style.text} style={{ color: `${color.accentColor}` }}>
            Q{step + 1}.
          </div>
        </div>
        <div className={style.question_text}>
          <div className={style.text}>{curQuestion.question}</div>
        </div>
      </section>

      {/* ANSWER LIST */}
      <section className={style.section_answerlist}>
        {curQuestion.answerList.map((it, idx) => (
          <Button
            key={`${step}-${idx}`}
            onClick={() => handleClickAnswer(it.point)}
          >
            {it.answer}
          </Button>
        ))}
      </section>
    </div>
  );
};

export default QuestionPage;
