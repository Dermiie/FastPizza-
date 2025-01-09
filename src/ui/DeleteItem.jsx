import { useDispatch } from "react-redux"
import Button from "./Button"
import { deleteItem } from "../features/cart/cartSlice"

function DeleteItem({pizzaId}) {
  const dispatch = useDispatch()

  function handleDeleteItem () {
   return dispatch(deleteItem(pizzaId))
  }

  return (
    <Button type={'small'} onClick={handleDeleteItem}>Delete</Button>
  )
}

export default DeleteItem
