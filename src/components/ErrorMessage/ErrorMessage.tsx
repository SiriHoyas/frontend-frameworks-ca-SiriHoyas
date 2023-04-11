import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div className={styles.errorMessageContainer}>
      <h1>It's not you..</h1>
      <p>We're having some trouble right now. Please refresh or try again later</p>
    </div>
  );
}

export default ErrorMessage;
