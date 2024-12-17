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
        <Formulario />
        <label>
          <Link to={"/auth"}>
              <Button
                type={"button"}
                title={"No tengo usuario"}
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