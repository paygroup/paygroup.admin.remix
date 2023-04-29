import { Flex, useColorModeValue } from "@chakra-ui/react";

import { HorizonLogo } from "~/components/icons";
import { HSeparator } from "~/components/separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
}
