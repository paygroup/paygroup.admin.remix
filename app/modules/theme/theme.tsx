import type { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { CardComponent } from "./additions/card/card";
import { breakpoints } from "./breakpoints";
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
  globalStyles,
  breakpoints,
  badgeStyles,
  buttonStyles,
  linkStyles,
  progressStyles,
  sliderStyles,
  inputStyles,
  textareaStyles,
  switchStyles,
  CardComponent
);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
