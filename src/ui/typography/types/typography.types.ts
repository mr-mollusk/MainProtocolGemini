import * as React from "react";

type TypographyElementsType =
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLParagraphElement;

export type AvailableTypographyTags = "h1" | "h2" | "span" | "p";
export type AvailableTypographyWeights = React.CSSProperties["fontWeight"];
export type AvailableTypographyFontSizes = number | string;
export type AvailableTypographyAlign = React.CSSProperties["textAlign"];
export type AvailableTypographyFamily = React.CSSProperties["fontFamily"];
export type AvailableTypographyColor = React.CSSProperties["color"];

export type TypographyProps = {
  tag?: AvailableTypographyTags;
  weight?: AvailableTypographyWeights;
  size?: AvailableTypographyFontSizes;
  align?: AvailableTypographyAlign;
  family?: AvailableTypographyFamily;
  color?: AvailableTypographyColor;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<TypographyElementsType>,
  TypographyElementsType
>;
