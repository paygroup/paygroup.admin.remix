import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const PageContent = ({ children }: React.PropsWithChildren) => (
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
      <PageFooter />
    </Box>
  </Box>
);

export const MainContent = ({ children }: React.PropsWithChildren) => (
  <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>{children}</Box>
);

const PageFooter = () => {
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          PAYGROUP. All Rights Reserved.
        </Text>
      </Text>
    </Flex>
  );
};
