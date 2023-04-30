import { Flex, Heading, HStack, useColorModeValue } from "@chakra-ui/react";

import { HSeparator } from "~/components/separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("purple.600", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <HStack mb="2">
        <Heading color={logoColor} fontFamily="Roboto">
          paygroup
        </Heading>
      </HStack>
      <HSeparator mb="20px" />
    </Flex>
  );
}
