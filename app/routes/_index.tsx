import { redirect } from "react-router";

export const handle = {
  title: "home",
};

export const loader = () => redirect("/home");

export default function Index() {
  return <div>index</div>;
}
