import React from 'react'
import Button from './button'
import { Link } from 'react-router'

const boton = {Button};

function Formulario() {
  return (
    <form className="flexCenter flex-col gap-3 p-10" id='login'>
        <label>
        <h3>Usuario</h3>
          <input 
          className='rounded-lg border-2 border-slate-400' 
          type="email" 
          name="usuario" 
          />
        </label>
        <label>
          <h3>Clave</h3>
          <input 
          className='rounded-lg border-2 border-slate-400'
          type="password"
          datatype='password'
          name="clave" 
          />
        </label>
          <Link to="/inicio">
            <Button
              type={"submit"}
              title={"Ingresar"}
              icon="/logo2-ucc.svg"
              variant={"btn_green"}
            />
          </Link>

    </form>
  )
}

export default Formulario