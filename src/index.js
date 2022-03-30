import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from './contexts/cart.context';
import { ProductProvider } from './contexts/products.context';

import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <ProductProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>,
  document.getElementById('root')
);


