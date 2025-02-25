import { ReactNode } from "react";
import styles from "./typography.module.css";
import DynamicTagComponent from "../../helpers/dynamic-tag-component/dynamic-tag-component";

const DEFAULT_COMPONENTS_BY_TYPE: { [key in TypographyType]: TypographyComponent } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "h4",
  subtitleVariant: "h4",
  body: "p",
  bodyVariant: "p",
};

type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "subtitleVariant" | "body" | "bodyVariant";
type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "b";

interface TypographyProperties {
  children: ReactNode;
  type: TypographyType;
  component?: TypographyComponent;
}

const getComponent = (properties: TypographyProperties): TypographyComponent => {
  return properties.component ?? DEFAULT_COMPONENTS_BY_TYPE[properties.type];
};

const Typography = (properties: TypographyProperties) => {
  const { children, type } = properties;
  const component = getComponent(properties);

  return (
    <DynamicTagComponent tag={component} className={styles[type]}>
      {children}
    </DynamicTagComponent>
  );
};

export default Typography;
