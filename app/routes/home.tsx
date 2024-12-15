import type { Route } from "./+types/home";
import Login from "~/componentes/Login";
import "/app/app.css";
import { Routes } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "RSU App" },
    { name: "description", content: "Bienvenido a SiRSU!" },
  ];
}

export default function Home() {
  return <Login />;
}
