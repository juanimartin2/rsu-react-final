import type { Route } from "./+types/home";
import Login from "~/pages/Login";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "SiRSU App" },
    { name: "description", content: "Bienvenido a SiRSU!" },
  ];
}

export default function Home() {
  return <Login />;
}
