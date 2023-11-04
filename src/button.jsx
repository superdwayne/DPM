import Styles from "./button.module.css";

function Button({ text }) {
  return <button className={Styles.btn}>{text}</button>;
}

export default Button;
