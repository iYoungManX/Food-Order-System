import Header from "./component/layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvide from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvide>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvide>
  );
}

export default App;
