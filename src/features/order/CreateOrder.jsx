import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];


function CreateOrder() {
  const username = useSelector(state => state.user.username)
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;

  return (
    <div className="px-4 py-4">
      <h2 className="my-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* <Form method="POST" action="order/new"> the action prop shows the route the action is cinnected to but it isn't really necessary using react router  */}
      <Form method="POST" >
        <div className="flex flex-col gap-2 mb-5 sm:items-center sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" className="input grow" defaultValue={username} required />
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:items-center sm:flex-row">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" className="w-full input" required />
          {formErrors && <div className="px-4 py-2 mt-2 text-xs text-red-700 bg-red-100 rounded-md">{formErrors.phone}</div>}
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:items-center sm:flex-row">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required className="w-full input"/>
          </div>
        </div>

        <div  className="flex items-center gap-2 mb-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button type='primary' disabled={isSubmitting} >{isSubmitting ? "Placing order" : "Order now"}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,

    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "Please submit a valid phone number";

  if (Object.keys(error).length > 0) return error;

  // console.log(order);

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
