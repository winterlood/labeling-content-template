import React from "react";
import style from "./ResultPage.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "store/createStore";

import resultData from "data/result.json";
import Button from "components/Button/Button";

export interface ResultPageProps {}

const ResultPage: React.FC<ResultPageProps> = (props: ResultPageProps) => {
  const { appConfig, userResponse } = useSelector((state: RootState) => {
    return {
      appConfig: state.appConfig,
      userResponse: state.userResponse,
    };
  });

  function getResultItem() {
    switch (appConfig.testType) {
      case "SCORE": {
        const scoreSum = userResponse.pickPoint.reduce((acc, it) => {
          return acc + it;
        }, 0);

        return resultData.find((item) => {
          if (item.min <= scoreSum && scoreSum <= item.max) {
            return true;
          }
          return false;
        });
      }
      case "CLASSIFY": {
        const max = userResponse.pickPoint
          .reduce((acc, it) => {
            acc[it - 1] += 1;
            return acc;
          }, new Array(resultData.length).fill(0))
          .reduce(
            (acc, it, idx) => {
              if (acc.maxCount <= it) {
                acc.maxCount = it;
                acc.maxIdx = idx;
              }
              return acc;
            },
            { maxCount: 0, maxIdx: 0 }
          );
        return resultData[max.maxIdx];
      }
    }
  }

  let resultItem = getResultItem();
  if (!resultItem) {
    return <div>에러가 발생하였습니다</div>;
  }

  const { id, result, summary, descript } = resultItem;
  const onClickRestart = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div
      className={style.container}
      data-aos={"fade-up"}
      data-aos-duartion="1500"
    >
      <section className={style.section_image}>
        <img
          alt="resultimage"
          src={`${process.env.PUBLIC_URL}/assets/img/result_${id}.gif`}
        />
      </section>
      <section className={style.section_info}>
        <div className={style.summary}>{summary}</div>
        <div className={style.result}>
          <h3>{result}</h3>
        </div>
        {/* 자유 */}
        <div className={style.result_descript}>{descript}</div>
      </section>

      {/* 자유 */}
      <section className={style.section_cta}>
        <Button onClick={onClickRestart}>테스트 다시하기</Button>
      </section>
    </div>
  );
};

export default ResultPage;
