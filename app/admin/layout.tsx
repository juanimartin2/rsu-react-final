import React from 'react'
import { Link, Outlet } from 'react-router'
import Image from '~/componentes/Image'
import logo from '/logo2-ucc.svg'
import addUser from '/user-add.svg'
import user from '/user-avatar-white.svg'
import users from '/users.svg'
import logout from '/log-out-white.svg'

function layout() {
  return (

    <div className="ViewPort">
        
        <div className="flex">

            {/* SIDEBAR */}
            <div className='w-1/6 h-screen pt-8 gap-3 bg-black'>

                {/* LOGO */}
                <div className="gap-x-4 p-2 justify-items-center">
                    <Image src={logo} alt="logo" width={55} height={55}/>
                    <div className="p-4 justify-items-center">
                        <h1 className="text-white origin-left font-bold text-xl">
                            SiRSU
                        </h1>
                        <h2 className="text-white origin-left font-medium text-base">
                            admin
                        </h2>
                    </div>
                </div>

                {/* BOTONES */}
                <ul className="flex-col pt-6 gap-4" >
                    <div className=" hover:bg-green-main hover:text-white">
                        <Link to={'./altaUser'}>
                            <li
                                className="text-gray-300 text-base flex items-center gap-x-4
                                cursor-pointer p-2 hover:bg-green-main50 hover:text-white"
                            >
                                <Image src={addUser} alt="addUser" width={35} height={35}/>
                                Crear Usuario
                            </li>
                        </Link>
                    </div>
                    <div className="hover:bg-green-main50 hover:text-white">
                        <Link to={'./usuarios'}>
                            <li
                                className="text-gray-300 text-base flex items-center gap-x-4
                                cursor-pointer p-2"
                            >
                                <Image src={user} alt="user" width={25} height={25}/>
                                Usuarios
                            </li>
                        </Link>
                    </div>
                    <div className="hover:bg-green-main50 hover:text-white">
                        <Link to={'./informes'}>
                            <li
                                className="text-gray-300 text-base flex items-center gap-x-4
                                cursor-pointer p-2"
                            >
                                <Image src={users} alt="users" width={25} height={25}/>
                                Ver Actividades
                            </li>
                        </Link>
                    </div>
                </ul>

                {/* LOGOUT */}

                <div className="justify-self-center p-10">
                    <Link to={'/adminLogin'}>
                        <Image src={logout} alt="logout" width={45} height={45}/>
                    </Link>
                </div>
                
            </div>

            {/* HOME */}
            <div className="w-5/6 h-screen">
                <Outlet />
            </div>

        </div>

  </div>
  )
}


export default layout