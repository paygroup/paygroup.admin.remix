import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { CardComponent } from "./additions/card/card";
import { badgeStyles } from "./components/badge";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { linkStyles } from "./components/link";
import { progressStyles } from "./components/progress";
import { sliderStyles } from "./components/slider";
import { switchStyles } from "./components/switch";
import { textareaStyles } from "./components/textarea";
import { globalStyles } from "./styles";

export const theme = extendTheme(
  {
    breakpoints: {
      sm: "320px",
      "2sm": "380px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1600px",
      "3xl": "1920px",
    },
  }, // Breakpoints
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  progressStyles, // progress styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles, // switch styles
  CardComponent // card component
);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
