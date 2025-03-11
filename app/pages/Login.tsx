import NoLogNavbar from '../componentes/NoLogNavbar'
import Footer from '../componentes/Footer'
import Formulario from '../componentes/Formulario'
import Image from "../componentes/Image"
import oficina from "/office.svg"
import { Link } from 'react-router'
import Button from '../componentes/button'


function Login() {
  return (
    <>
    <div className='flexCenter gap-20 ViewPort'>
      <Image src={oficina} alt="oficina" width={450} height={300}/>

      <div className="flexCenter p-12 flex-col rounded-lg shadow-xl">
        <div className="flexCenter flex-col">
          <h1 className="font-bold text-teal-950 bold-28">
          Responsabilidad Social
          </h1>
          <h2 className="font-bold text-green-main50 bold-28">
          Universitaria
          </h2>
        </div>

        {/* FORMULARIO LOGIN */}
        <div className="w-full pt-10 pb-5 rounded-lg" id='login'>
          <label className="block text-gray-700 font-medium mb-1">
            CUIT / CUIL (Con guión incluido)
          </label>
          <input
            type="string"
            placeholder="Ingresa tu N° de CUIT/CUIL"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
          />
          <label className="block text-gray-700 font-medium mt-4 mb-1">
            Clave
          </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="p-6">
          <Link to="/inicio">
            <Button
              type={"button"}
              title={"Ingresar"}
              icon="/logo2-ucc.svg"
              variant={"btn_green"}
            />
          </Link>
        </div>

        <label>
          <Link to={"/adminLogin"}>
              <Button
                type={"button"}
                title={"Ingresar como Encargado"}
                icon="/user-avatar.svg"
                variant={"btn_green"}
              />
          </Link>
        </label>
      </div>
      
    </div>
    </>
  )
}

export default Login;