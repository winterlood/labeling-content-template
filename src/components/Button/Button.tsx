import React, { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/createStore";
import style from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  id?: string;
};

const Button = (props: Props) => {
  const { buttonType, color, animation } = useSelector(
    (v: RootState) => v.appConfig
  );

  const buttonBorder = useMemo(() => {
    switch (buttonType) {
      case "ROUND":
        return 28;
      case "SOFT":
        return 12;
      case "HARD":
        return 0;
    }
  }, [buttonType]);

  return (
    <div
      id={props.id}
      data-aos={animation.type}
      data-aos-duration={animation.duration}
      className={[style.outter].join(" ")}
    >
      <div
        onClick={props.onClick}
        className={[style.inner, props.className].join(" ")}
        style={{
          borderRadius: `${buttonBorder}px`,
          background: `${color.accentColor}`,
          boxShadow: `${color.accentShadowColor} 0px 5px 20px`,
        }}
      >
        <div className={style.text}>{props.children}</div>
      </div>
    </div>
  );
};

export default React.memo(Button);
