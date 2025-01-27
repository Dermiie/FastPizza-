import Button from '../../ui/Button';
import DeleteItem from './DeleteItem';
import { formatCurrency } from '../../utils/helpers';
import UpdateCartItem from './UpdateCartItem';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='py-3 sm:flex sm:justify-between sm:items-center'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

        <UpdateCartItem pizzaId={pizzaId}></UpdateCartItem>
        <DeleteItem pizzaId={pizzaId}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
