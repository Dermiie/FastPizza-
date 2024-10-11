import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

function AppLayout() {
  return (
    <div>
      <Header></Header>

      <main>
        <h1>Content</h1>
        <Outlet></Outlet>
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
