import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";

import { useRouteHandles } from "./page.handles.use";

export const PageBreadcrumbs = () => {
  const color = useColorModeValue("gray.700", "white");
  const handles = useRouteHandles();

  return (
    <Breadcrumb mb="1">
      {handles.map((h, i) => (
        <BreadcrumbItem key={i} color={color} fontSize="sm">
          <BreadcrumbLink color={color} to={h.pathname} as={Link}>
            {h.handle?.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
