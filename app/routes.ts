import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [

    index("routes/home.tsx"),
    route("inicio", "./pages/Inicio.tsx"),

    ...prefix("login", [
        index("./pages/Login.tsx"),
      ]),

    ...prefix("auth", [
        index("./auth/authAdmin.tsx"),
        route("home", "./auth/homeAuthUser.tsx"),
        route("altaUser", "./auth/altaUser.tsx"),
      ])
    
] satisfies RouteConfig;
