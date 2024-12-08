import { Link } from "react-router-dom"

function Button({children, disabled, to}) {
const className = "px-4 py-2 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-3"

  if(to) return (
    <Link className={className} to={to}>{children}</Link>
  )

  return (
    <button disabled={disabled} className={className}>{children}</button>
  )
}

export default Button
