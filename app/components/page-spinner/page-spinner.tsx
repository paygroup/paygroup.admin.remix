import { Spinner } from "@chakra-ui/react";
import { useNavigation } from "@remix-run/react";

export const PageSpinner = ({
  path,
  children,
}: React.PropsWithChildren<{
  path: string;
}>) => {
  const { state, location } = useNavigation();

  const showSpinner =
    (path === "/" && location?.pathname === "/") ||
    (path !== "/" && location?.pathname.startsWith(path));

  console.log("spinner", {
    path,
    location: location?.pathname,
    showSpinner,
  });

  return state === "loading" && showSpinner ? (
    <Spinner size="lg" />
  ) : (
    <>{children}</>
  );
};
