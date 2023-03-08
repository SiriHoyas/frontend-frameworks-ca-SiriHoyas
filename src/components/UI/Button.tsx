import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Props = {
  className: string;
  label: string;
  path: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className, type, label, path, onClick }: Props) {
  return (
    <Link to={path}>
      <button className={`${styles.btn} ${styles[className]} `} type={type} onClick={onClick}>
        {label}
      </button>
    </Link>
  );
}

export default Button;
