import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="px-4 py-3 uppercase bg-yellow-500 border-b border-stone-200 ">
      <Link to="/" className="tracking-widest">
        Demi Fast Pizza Co.
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </div>
  );
}

export default Header;
