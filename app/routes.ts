import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [

    index("routes/home.tsx"),

    route("inicio", "./inicio/layout.tsx", [
      index("./inicio/Inicio.tsx"),
    ]),

    ...prefix("login", [
        index("./pages/Login.tsx"),
      ]),

    ...prefix("adminLogin", [
        index("./auth/authAdmin.tsx"),
      ]),

    route("admin", "./admin/layout.tsx", [
      index("./admin/homeAdmUser.tsx"),
      route("altaUser", "./admin/altaUser.tsx"),
      route("usuarios", "./admin/abmUsers.tsx"),
      route("informes", "./admin/abmInformes.tsx"),
    ])

] satisfies RouteConfig;
