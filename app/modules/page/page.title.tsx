import { Link, useColorModeValue } from "@chakra-ui/react";

import { useRouteHandles } from "./page.handles.use";

export const PageTitle = () => {
  const color = useColorModeValue("navy.700", "white");
  const handles = useRouteHandles();
  const pageTitle = handles[handles.length - 1].handle?.title;

  return (
    <Link
      color={color}
      href="#"
      bg="inherit"
      mt="10"
      borderRadius="inherit"
      fontWeight="bold"
      fontSize="32"
      _hover={{ color }}
      _active={{
        bg: "inherit",
        transform: "none",
        borderColor: "transparent",
      }}
      _focus={{
        boxShadow: "none",
      }}
    >
      {pageTitle}
    </Link>
  );
};
