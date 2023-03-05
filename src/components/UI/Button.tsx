import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Props = {
  className: string;
  label: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, type, label, onClick }: Props) {
  return (
    <button className={`${styles.btn} ${styles[className]} `} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
