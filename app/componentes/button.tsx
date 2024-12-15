import Image from "./Image"
import logo from "/rsu-react/public/logo2-ucc.svg"

type ButtonProps = {
  type: 'button' | 'submit',
  title: string,
  icon?: string,
  variant: string
}

const Button = ( {type, title, icon, variant} : ButtonProps ) => {
  return (
    <button
    type={type}
    className={'flexCenter gap-3 rounded-full ${variant}'}
    >
      {icon && <Image src={logo} alt={title} width={24} height={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  )
}

export default Button