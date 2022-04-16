import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import { CartProvider } from "./contexts/cart.context";
import { ProductsProvider } from "./contexts/products.context";
import { UserProvider } from "./contexts/user.context";
import {Elements} from '@stripe/react-stripe-js'
import { stripePromise } from "./stripe/stripe";

import App from "./App";


ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider> 
          <Elements stripe={stripePromise}>
          <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
