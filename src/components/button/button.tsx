import styles from "./button.module.css";

const Button = () => {
  const hasIconBefore: boolean = false;
  const hasIconAfter: boolean = false;

  return (
    <button className={styles["button"]} onClick={() => alert("holu")}>
      {hasIconBefore && <span className={styles["button-text"]}>hasIconBefore</span>}
      <span className={styles["button-text"]}>Alert</span>
      {hasIconAfter && <span className={styles["button-text"]}>hasIconAfter</span>}
    </button>
  );
}

export default Button;
