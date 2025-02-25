import { Children, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProperties {
  children?: ReactNode;
  iconBefore?: string;
  iconAfter?: string;
}

const Button = (properties: ButtonProperties) => {
  const { children, iconBefore, iconAfter } = properties;

  return (
    <button className={styles["button"]} onClick={() => alert("holu")}>
      {iconBefore && <span>{iconBefore}</span>}
      {children && <span className={styles["button-text"]}>{children}</span>}
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
