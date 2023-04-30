import { Box } from "@chakra-ui/react";

import { Footer } from "./layout.footer";

export const LayoutMain = ({ children }: React.PropsWithChildren) => (
  <Box
    float="right"
    minHeight="100vh"
    height="100%"
    overflow="auto"
    position="relative"
    maxHeight="100%"
    w={{ base: "100%", xl: "calc( 100% - 290px )" }}
    maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
    transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
    transitionDuration=".2s, .2s, .35s"
    transitionProperty="top, bottom, width"
    transitionTimingFunction="linear, linear, ease"
  >
    <Box
      mx="auto"
      p={{ base: "20px", md: "30px" }}
      pe="20px"
      minH="95vh"
      pt="50px"
    >
      {children}
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);
