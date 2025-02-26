import { ReactNode } from "react";
import styles from "./button.module.css";
import Typography from "../typography/typography";

type ButtonVariant = "default" | "filled" | "outlined";
type ButtonSize = "small" | "medium" | "large";
type CallToActionVariant = "call-to-action-large" | "call-to-action-medium" | "call-to-action-small";

interface InputButtonProperties {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconBefore?: string;
  iconAfter?: string;
}

interface ParsedButtonProperties {
  children: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  callToActionSize: CallToActionVariant;
  disabled: boolean;
  iconBefore?: string;
  iconAfter?: string;
  styles: string;
}

const CALL_TO_ACTION_VARIANT_BY_SIZE: { [key in ButtonSize]: CallToActionVariant } = {
  small: "call-to-action-small",
  medium: "call-to-action-medium",
  large: "call-to-action-large",
};

const parseButtonProperties = (properties: InputButtonProperties): ParsedButtonProperties => {
  const { children, variant = "default", size = "medium", disabled = false, iconBefore, iconAfter } = properties;
  return {
    children,
    variant,
    size,
    callToActionSize: CALL_TO_ACTION_VARIANT_BY_SIZE[size],
    disabled,
    iconBefore,
    iconAfter,
    styles: `${styles["base"]} ${styles[variant]} ${styles[size]}`,
  };
};

const Button = (properties: InputButtonProperties) => {
  const { children, callToActionSize, disabled, iconBefore, iconAfter, styles } = parseButtonProperties(properties);

  return (
    <button className={styles} disabled={disabled}>
      {iconBefore && <span>{iconBefore}</span>}
      {children && <Typography variant={callToActionSize}>{children}</Typography>}
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
