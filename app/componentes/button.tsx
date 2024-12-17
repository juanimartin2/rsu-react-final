import Image from "./Image"

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
    className={'flexCenter p-2 gap-3 rounded-full ${variant}'}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  )
}

export default Button