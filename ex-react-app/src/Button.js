import PropTypes from "prop-types";
import styles from "./Button.module.css";
// css 모듈러(modular) - 원하는 컴포넌트에만 css파일의 style을 적용

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
} // 실제 html class의 이름은 무작위 랜덤 className을 생성

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
