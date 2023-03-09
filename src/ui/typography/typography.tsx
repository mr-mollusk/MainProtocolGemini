import * as React from "react";
import clsx from "clsx";

import { TypographyProps } from "./types/typography.types";

import styles from "./styles/typography.module.css";
import { getInlineStyle, getPropertySize } from "../../utils";

/**
 * @param {} [tag] - tag of the element
 * * h1
 * * h2
 * * h3
 * * p
 * * span
 * @param {} [weight] - font weight
 * @param {} [size] - font size
 * @param {} [align] - text align
 * @param {} [family] -  font family 

 * @returns
 */
export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
  children,
  className,
  style,
  tag = "p",
  weight,
  size,
  align,
  color = "#fff",
  family,
}) => {
  const ElementToRender = tag;

  return (
    <ElementToRender
      style={getInlineStyle({
        style,
        variables: {
          weight,
          align,
          family,
          color,
          ...(size && { size: getPropertySize(size) }),
        },
      })}
      className={clsx(className, styles.typography, styles[tag])}
    >
      {children}
    </ElementToRender>
  );
};
