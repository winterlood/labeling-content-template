import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/createStore";
import { navigate } from "store/slice/pageSlice";
import style from "./LoadingPage.module.scss";
import { Plane } from "react-loader-spinner";

export interface LoadingPageProps {}

const LoadingPage: React.FC<LoadingPageProps> = (props: LoadingPageProps) => {
  const dispatch = useAppDispatch();
  const { color } = useSelector((v: RootState) => v.appConfig);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(navigate("RESULT"));
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <div
      data-aos={"zoom-in-up"}
      data-aos-duration={1500}
      className={style.conatiner}
    >
      {isSuccess ? (
        <div className={style.SuccessContainer}>
          <img
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            src={process.env.PUBLIC_URL + "/assets/img/success.png"}
          />
          <p>결과 계산이 완료되었습니다</p>
        </div>
      ) : (
        <>
          <Plane
            ariaLabel="loading-indicator"
            color={color.accentColor}
            secondaryColor={color.accentShadowColor}
          />
          <div className={style.loading_text}>결과를 계산하고 있습니다</div>
        </>
      )}
    </div>
  );
};

export default LoadingPage;
