import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateCartItem from '../cart/UpdateCartItem';


function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  
  const dispatch = useDispatch()

  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const inCart = currentQuantity > 0

  

  function handleAddToCart () {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1
    }

    dispatch(addItem(newItem));

  }

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale' : ''}`}/>
      <div className='flex flex-col grow pt-0.5'>
        <p>{name}</p>
        <p className='text-sm italic capitalize'>{ingredients.join(', ')}</p>
        <div className='flex items-center justify-between mt-auto '> 
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium uppercase text-stone-500'>Sold out</p>}

          {inCart && <div className="flex items-center gap-2 sm:gap-8">
            <UpdateCartItem pizzaId={id}></UpdateCartItem>
            <DeleteItem pizzaId={id}>Delete</DeleteItem>
         </div>}

          {!soldOut && !inCart && <Button type='small' onClick={handleAddToCart} >Add to cart</Button> }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
