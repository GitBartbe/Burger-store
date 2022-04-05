import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CartProvider } from "./contexts/cart.context";
import { ProductProvider } from "./contexts/products.context";
import { UserProvider } from "./contexts/user.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
