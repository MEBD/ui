import React, { ReactNode } from "react";

interface DynamicTagComponentProperties {
  tag: string;
  children: ReactNode;
  className?: string;
}

const DynamicTagComponent = (properties: DynamicTagComponentProperties) => {
  const { tag, children, className } = properties;
  return React.createElement(tag, { className }, children);
};

export default DynamicTagComponent;
