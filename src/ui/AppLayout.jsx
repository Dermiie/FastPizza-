import { Link, Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  console.log(navigation);

  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}

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
