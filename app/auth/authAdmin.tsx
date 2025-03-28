import React from 'react'
import { Link } from 'react-router'
import Button from '~/componentes/button'
import Formulario from '~/componentes/Formulario'
import Image from '~/componentes/Image'

function authAdmin() {
  return (
    <>
    <div className='flexCenter ViewPort'>
      <div className="flexCenter p-12 flex-col border-solid 
       border-gray-90 rounded-lg shadow-xl">
        <div className="flexCenter flex-col">
          <h1 className="font-bold text-teal-950 bold-28">
          Ingresar como
          </h1>
          <h2 className="font-bold text-green-main50 bold-28">
          Encargado
          </h2>
        </div>

        {/* FORMULARIO ADMIN */}
        <div className="w-full pt-10 pb-5 rounded-lg" id='admlogin'>
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
          <Link to="/admin/inicio">
            <Button
              type={"button"}
              title={"Ingresar"}
              icon="/logo2-ucc.svg"
              variant={"btn_green"}
            />
          </Link>
        </div>

        <label>
          <Link to={"../"}>
            <Button
              type={"button"}
              title={"Volver a Inicio"}
              icon="/back.svg"
              variant={"btn_green"}
            />
          </Link>
        </label>
      </div>
      
    </div>
    </>
  )
}

export default authAdmin