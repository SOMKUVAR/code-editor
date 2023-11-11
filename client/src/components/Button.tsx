
const Button = (props: any) => {
  return (
    <button disabled={props.disabled}
      className={`bg-blue-500 text-white font-bold py-1 px-6 rounded ${props.disabled && 'hover:bg-blue-700' }`}
      onClick={props.onClick}>
      {props.children}
    </button>

  )
}
export default Button;
