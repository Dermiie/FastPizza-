import { Link, useNavigate } from "react-router-dom"

function LinkButton({children, to}) {
  const navigate = useNavigate()
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline"

 
  if (to === -1) return(
    <button className={className} onClick={()=> navigate(to)}>
      {children}  
     </button>
  );

  return (
    <Link  className={className}>
    {children}   
    </Link>
  )
}

export default LinkButton