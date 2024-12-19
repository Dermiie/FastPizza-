import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

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
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>

      {/* <Form method="POST" action="order/new"> the action prop shows the route the action is cinnected to but it isn't really necessary using react router  */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" className="input" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" className="input" required />
          </div>
          {formErrors && <div>{formErrors.phone}</div>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input"/>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
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
