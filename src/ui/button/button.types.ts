import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  LegacyRef,
  ReactNode,
} from "react";

export type ButtonSize = "s" | "m" | "l";

export type ButtonVariant = "filled" | "outlined" | "transparent";

export type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  href?: string;
  isTargetBlank?: boolean;
  btnRef?: LegacyRef<HTMLButtonElement>;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
