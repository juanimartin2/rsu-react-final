import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("inicio", "./componentes/Inicio.tsx"),
] satisfies RouteConfig;
