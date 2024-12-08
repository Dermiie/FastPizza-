import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  // console.log(navigation);

  const isLoading = navigation.state === "loading";

  return (
    <div className="layout grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader></Loader>}

      <Header></Header>

      <div className="overflow-auto">
      <main className="max-w-3xl mx-auto">
        <Outlet></Outlet>
      </main>
      </div>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
