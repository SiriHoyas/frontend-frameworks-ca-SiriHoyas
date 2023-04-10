import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "../../types";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ className, type, label, onClick }: ButtonType) {
  return (
    <button className={`${styles.btn} ${styles[className]} `} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
