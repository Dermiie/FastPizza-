
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import {clearCart} from './cartSlice'
import { getUsername } from '../user/userSlice';

function Cart() {
  const cart = useSelector(getCart)
  const username = useSelector(getUsername)
  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart></EmptyCart>


  
  return (

    <div className='px-4 py-3 '>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='text-xl font-semibold mt-7'>Your cart, {username}</h2>
      <ul className='mt-3 border-b divide-y divide-stone-300'>{cart.map((item) => (<CartItem item={item} key={item.pizzaId}></CartItem>))}</ul>
      <div className='mt-10 space-x-2'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button type='secondary' onClick={() => {dispatch(clearCart())}}>Clear cart</Button>
      </div>
    </div> 
  );
}

export default Cart;
