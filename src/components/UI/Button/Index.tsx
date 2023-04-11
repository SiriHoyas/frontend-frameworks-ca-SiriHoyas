import { ButtonType } from "../../types";
import styles from "./Button.module.css";

function Button({ className, type, label, onClick }: ButtonType) {
  return (
    <button className={`${styles.btn} ${styles[className]} `} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
