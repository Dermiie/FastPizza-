import { Link } from "react-router-dom";
import Cart from "./Cart";

function CartOverview() {
  return (
    <div className="flex items-center justify-between px-4 py-4 text-sm uppercase sm:px-6 md:text-base bg-stone-800 text-stone-200 ">
      <p className="space-x-4 font-semibold sm:space-x-6 text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
