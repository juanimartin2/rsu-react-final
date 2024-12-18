import { Link, Outlet } from "react-router"
import Navbar from "~/componentes/Navbar"
import Image from "~/componentes/Image"
import back from "/back-arrow.svg"
import { Menus } from "constantes"

const homeAuthUser = () => {
  return (

    <div className="p-7 text-2xl font-semibold flex-1">
        Pantalla de Encargado 
        <div className="pt-5 text-lg font-semibold">
        Aquí podrá ver y editar la información de informes y la configuración de los usuarios
        </div>
    </div>

  )
}

export default homeAuthUser