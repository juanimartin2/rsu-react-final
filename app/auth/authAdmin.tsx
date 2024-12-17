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
        <Formulario />
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