import { Outlet } from "@remix-run/react";

export const handle = {
  title: "partners",
  pathname: "/partners",
};

export default function PartnersLayout() {
  return <Outlet />;
}