import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm uppercase bg-yellow-500 border-b md:text-base sm:px-6 sm:py-5 border-stone-200 ">
      <Link to="/" className="tracking-widest">
        Demi Fast Pizza Co.
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </div>
  );
}

export default Header;
