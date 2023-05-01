import {
  Flex,
  Heading,
  HStack,
  useBreakpoint,
  useColorModeValue,
} from "@chakra-ui/react";

import { HSeparator } from "~/components/separator";

export function SidebarBrand() {
  const bkr = useBreakpoint({
    sm: "320px",
    "2sm": "380px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1600px",
    "3xl": "1920px",
  } as any);

  //   Chakra color mode
  let logoColor = useColorModeValue("purple.600", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <HStack mb="2">
        <Heading color={logoColor} fontFamily="Roboto">
          paygroup
        </Heading>
        <div>{bkr}</div>
      </HStack>
      <HSeparator mb="20px" />
    </Flex>
  );
}
