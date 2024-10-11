import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Order from './features/order/Order';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';

const routes = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: 'menu', element: <Menu></Menu> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'order/new', element: <CreateOrder></CreateOrder> },
      { path: 'order/:orderId', element: <Order></Order> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
