import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/createStore";
import { navigate } from "store/slice/pageSlice";
import style from "./LandingPage.module.scss";

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
  const { title, subTitle, startButtonText, color } = useSelector(
    (v: RootState) => v.appConfig
  );
  const dispatch = useAppDispatch();
  const goQuestionPage = () => {
    dispatch(navigate("QUESTION"));
  };
  return (
    <div className={style.container} data-aos={"fade-up"}>
      <header className={style.section_logo}>
        <Logo />
      </header>
      <main>
        <section className={style.section_head}>
          <div style={{ color: color.accentColor }} className={style.title}>
            {title}
          </div>
          <div style={{ color: color.accentColor }} className={style.subTitle}>
            {subTitle}
          </div>
        </section>
        <section
          className={style.section_image}
          style={{
            backgroundImage: `url('${
              process.env.PUBLIC_URL + "/assets/img/start_banner.gif"
            }')`,
          }}
        ></section>
      </main>
      <Button onClick={goQuestionPage}>{startButtonText}</Button>
    </div>
  );
};

export default LandingPage;
