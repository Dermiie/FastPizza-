import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <div>
      <Link to="/">Demi Fast Pizza Co.</Link>
      <SearchOrder></SearchOrder>
    </div>
  );
}

export default Header;
