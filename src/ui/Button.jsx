import { Link } from "react-router-dom"

function Button({children, disabled, to, type}) {
const base = " font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:outline-none  disabled:cursor-not-allowed"

const styles = {
  primary: base + ' px-4 py-3 md:px-6 md:py-4',

  small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',

  secondary: 'font-semibold px-4 py-2.5 md:px-6 md:py-3.5 tracking-wide uppercase transition-colors border-2 border-stone-300 duration-300 bg-transparent rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-offset-2 focus:ring-stone-200 focus:outline-none disabled:cursor-not-allowed'
}

  if(to) return (
    <Link className={styles[type]} to={to}>{children}</Link>
  )

  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}

export default Button
