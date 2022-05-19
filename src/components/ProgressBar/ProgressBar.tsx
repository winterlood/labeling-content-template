import { useSelector } from "react-redux";
import { RootState } from "store/createStore";
import style from "./ProgressBar.module.scss";
type Props = {
  step: number;
  maxStep: number;
};

const ProgressBar = ({ step, maxStep }: Props) => {
  const { color } = useSelector((v: RootState) => v.appConfig);

  const width = (step / maxStep) * 100;
  return (
    <>
      <div className={style.ProgressText}>
        <span className={style.now}>{step + 1}</span>
        <span className={style.total}>/ {maxStep}</span>
      </div>
      <div className={style.ProgressBar}>
        <div className={style.inner}>
          <div
            className={style.progress}
            style={{
              backgroundColor: color.accentColor,
              width: `${width}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
