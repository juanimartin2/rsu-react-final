
import { NAV_LINKS } from "constantes"
import { Link } from "react-router"
import Button from "./button"
import Image from "./Image"
import logo from "/logo2-ucc.svg"


function Navbar() {
  return (
    <nav className="flexBetween max-container
    padding-container relative z-30 py-5">
     <link href="/">
      <Image src={logo} alt={logo}  width={24} height={24}/>
     </link> 

     <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link to={link.href} key={link.key} 
          className="regular-16 text-gray-50 flexCenter cursor-pointer 
          pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul> 

      <div className="lg:flexCenter hidden">
        <Button 
        type={"button"}
        title={"AAAA"}
        icon="/logo2-ucc.svg"
        variant={"btn_black"}
        />
      </div>

    </nav>
  )
}

export default Navbar