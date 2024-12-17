import { Link } from "react-router"
import Navbar from "~/componentes/Navbar"
import Image from "~/componentes/Image"
import back from "/back-arrow.svg"
import { Menus } from "constantes"

const homeAuthUser = () => {
  return (

    <div className="ViewPort">

        <Navbar />

        <div className="flex">

            {/* SIDEBAR */}
            <div className='w-1/6 h-screen pt-8 bg-green-main'>
                <div className="flex gap-x-4 p-2 items-center">
                    <h1 className="text-white origin-left font-semibold text-xl">
                        SiRSU
                    </h1>
                </div>
                <ul className="pt-6">
                {Menus.map((menu, index) =>(
                    <li 
                        key={index} 
                        className="text-gray-300 text-base flex items gap-x-4 
                        cursor-pointer p-2 hover:bg-green-main50"
                    >
                        {menu.title}
                    </li>
                ))}
                </ul>
            </div>

            {/* HOME */}
            <div className="p-7 text-2xl font-semibold flex-1 w-5/6 h-screen">
                Home
            </div>

        </div>

  </div>
  )
}

export default homeAuthUser