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
        <BreadcrumbItem key={h.id} color={color} fontSize="sm">
          <BreadcrumbLink
            color={color}
            to={h.pathname}
            as={i === handles.length - 1 ? Link : undefined}
          >
            {h.handle?.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
