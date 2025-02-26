import { ReactNode } from "react";
import styles from "./typography.module.css";
import DynamicTagComponent from "../../helpers/dynamic-tag-component/dynamic-tag-component";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "subtitle-variant"
  | "body"
  | "body-variant"
  | "caption"
  | "caption-variant"
  | "call-to-action-large"
  | "call-to-action-medium"
  | "call-to-action-small";

type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "b";

interface InputTypographyProperties {
  children: ReactNode;
  variant: TypographyVariant;
  component?: TypographyComponent;
}

interface ParsedTypographyProperties {
  children: ReactNode;
  variant: TypographyVariant;
  component: TypographyComponent;
}

const DEFAULT_COMPONENTS_BY_TYPE: { [key in TypographyVariant]: TypographyComponent } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "h4",
  "subtitle-variant": "h4",
  body: "p",
  "body-variant": "p",
  caption: "p",
  "caption-variant": "p",
  "call-to-action-large": "span",
  "call-to-action-medium": "span",
  "call-to-action-small": "span",
};

const getComponent = (properties: InputTypographyProperties): TypographyComponent => {
  return properties.component ?? DEFAULT_COMPONENTS_BY_TYPE[properties.variant];
};

const Typography = (properties: InputTypographyProperties) => {
  const { children, variant } = properties;
  const component = getComponent(properties);

  return (
    <DynamicTagComponent tag={component} className={styles[variant]}>
      {children}
    </DynamicTagComponent>
  );
};

export default Typography;
