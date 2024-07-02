import React from "react";

import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
