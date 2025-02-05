// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

// const order = {
//   id: 'ABCDEF',
//   customer: 'Jonas',
//   phone: '123456789',
//   address: 'Arroios, Lisbon , Portugal',
//   priority: true,
//   estimatedDelivery: '2027-04-25T10:00:00',
//   cart: [
//     {
//       pizzaId: 7,
//       name: 'Napoli',
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: 'Diavola',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: 'Romana',
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: '-9.000,38.000',
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id:  pizzaId,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const fetcher = useFetcher();
  const isLoadingIngredients = fetcher.state === 'loading'

  useEffect(function(){
    if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
  }, [fetcher])

  return (
    <div className='px-4 py-6 space-y-6'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <h2 className='text-xl font-semibold'>Order #{pizzaId} status</h2>

        <div className='flex items-center gap-2'>
          {priority && <span className='px-3 py-1 text-sm tracking-wide text-red-100 uppercase bg-red-600 rounded-full '>Priority</span>}
          <span  className='px-3 py-1 text-sm tracking-wide text-green-100 uppercase bg-green-600 rounded-full '>{status} order</span>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2 px-4 py-6 bg-stone-300'>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='my-2 border-t border-b divide-y border-stone-300 divide-stone-300'>
        {cart.map(item => <OrderItem item={item} key={item.pizzaId} isLoadingIngredients={isLoadingIngredients} ingredients={fetcher?.data?.find((el)=> el.id === item.pizzaId)?.ingredients ?? []}></OrderItem>)}
      </ul>

      <div className='px-4 py-6 space-y-2 bg-stone-300'>
        <p className='text-sm font-medium text-stone-600'>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className='text-sm font-medium text-stone-600'>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-bold'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder></UpdateOrder>}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);

  return order;
}

export default Order;
