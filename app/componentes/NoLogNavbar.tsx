import { Link } from "react-router"
import Image from "./Image"
import logo from "/logo2-ucc.svg"

function NoLogNavbar() {
  return (
    <nav className="flexCenter max-container padding-container relative z-30 py-5">
     <Link to="/">
      <Image src={logo} alt="logo" width={64} height={29}/>
     </Link>
    </nav>
  )
}

export default NoLogNavbar