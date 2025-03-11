import React from 'react'
import Button from './button'
import { Link } from 'react-router'

const boton = {Button};

function Formulario() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg" id='login'>
      <label className="block text-gray-700 font-medium mb-1">
        CUIT / CUIL
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
          <Link to="/inicio">
            <Button
              type={"button"}
              title={"Ingresar"}
              icon="/logo2-ucc.svg"
              variant={"btn_green"}
            />
          </Link>
    </div>
  )
}

export default Formulario