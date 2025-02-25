import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'
import { Link } from 'react-router'
import Image from '~/componentes/Image'
import logout from '/log-out.svg'

function inicio() {
  return (
    <>
    <div className='flexCenter flex-col gap-5'>
      <h1>PAGINA INICIOOOOOO</h1>
      <div className="gap-8">
        <h2>Volver</h2>
        <Link to={'/'}>
          <Image src={logout} alt={logout} height={50} width={50} />
        </Link>
      </div>
    </div>
    </>
  )
}

export default inicio