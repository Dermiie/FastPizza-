import Button from "../../ui/Button"

function UpdateCartItem({pizzaId}) {
  return (
   <div className="flex items-center gap-2 md:gap-3">
     <Button type={'round'}>-</Button>
     <Button type={'round'}>+</Button>
   </div>
  )
}

export default UpdateCartItem
