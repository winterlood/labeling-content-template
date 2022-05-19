import style from "./Logo.module.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={style.container}>
      <img
        alt="service_logo"
        className={style.logo_image}
        src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
      />
    </div>
  );
};

export default Logo;
