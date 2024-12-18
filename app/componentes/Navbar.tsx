
import { Link } from "react-router"
import Button from "./button"
import Image from "./Image"
import logout from "/log-out.svg"
import logo from "/logo2-ucc.svg"
import user from "/user-avatar.svg"


function Navbar() {
  return (
    <nav className="container">
      <div className="flexBetween rounded-lg shadow-xl">
        <div className="px-12">
          <Link to="../">
          <Image src={logout} alt={logout}  width={35} height={35}/>
          </Link>
        </div>
          <Link to="/">
            <Image src={logo} alt={logo}  width={35} height={35}/>
          </Link>
        <div className="lg:flexCenter hidden px-10">
          <Link to="/">
            <Button
              type={"button"}
              title={"UsuActivo"}
              icon={user}
              variant={"btn_black"}
            />
          </Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar