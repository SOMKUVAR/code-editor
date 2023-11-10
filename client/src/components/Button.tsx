
export const Button = (props: any) => {
  return (
    <button disabled = {props.disabled} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded" onClick={props.onClick}>
      {props.children}
    </button>
   
  )
}
