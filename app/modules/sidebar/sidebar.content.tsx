import { Box, Flex, Stack } from "@chakra-ui/react";

import type { RoutesType } from "~/types";

import { SidebarBrand } from "./sidebar.brand";
import { SidebarLinks } from "./sidebar.links";

export const SidebarContent: React.FC<{ routes: RoutesType[] }> = ({
  routes,
}) => (
  <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
    <SidebarBrand />
    <Stack direction="column" mt="8px" mb="auto">
      <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
        <SidebarLinks routes={routes} />
      </Box>
    </Stack>
  </Flex>
);
