export type Theme = {
  animation: Animation;
  colors: Colors;
  fonts: Fonts;
};
type Animation = {
  border: string;
  multiplierColor: string;
};
type Colors = {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  success: string;
  successHover: string;
  backgroundLight: string;
  background: string;
  light: string;
  dark: string;
  disabled: string;
  disabledText: string;
  bgMain: string;
  bgOpacity: string;
};
type Fonts = {
  primary: string;
};
