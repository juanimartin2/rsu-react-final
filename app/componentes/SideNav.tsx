import logo from "/logo2-ucc.svg"

export default function SideNav ({ }) {
  return (
    <>
    <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-green-main border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <img src={logo} />
            </div>
        </nav>
    </aside>
    </>
  )
}
    