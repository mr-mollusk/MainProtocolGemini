import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  size = variant === "transparent" ? "s" : "m",
  fullWidth = false,
  className = "",
  href = null,
  btnRef,
  isTargetBlank,
  ...rest
}) => {
  let btn = (
    <button
      className={clsx(
        styles.button,
        styles[size],
        styles[variant],
        { [styles.fullWidth]: fullWidth },
        className
      )}
      ref={btnRef}
      {...rest}
    >
      {children}
    </button>
  );

  if (href) {
    btn = (
      <a
        href={href}
        target={isTargetBlank ? "_blank" : ""}
        rel={isTargetBlank ? "noreferrer" : ""}
      >
        {btn}
      </a>
    );
  }

  return btn;
};
