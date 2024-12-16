import NoLogNavbar from './NoLogNavbar'
import Footer from './Footer'
import Formulario from './Formulario'
import Image from "./Image"
import oficina from "/office.svg"


function Login() {
  return (
    <>
    <NoLogNavbar />
    <div className='flexCenter'>
      <Image src={oficina} alt="oficina" width={450} height={300}/>

      <div className="flexCenter padding-container flex-col">
        <h1 className="font-bold text-teal-950 bold-28">
        Responsabilidad Social
        </h1>
        <h2 className="font-bold text-green-main50 bold-28">
        Universitaria
        </h2>
        <Formulario />
      </div>
      
    </div>
    </>
  )
}

export default Login;