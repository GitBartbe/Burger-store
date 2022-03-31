import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if(existingItem) {
    return cartItems.map((item) =>
     item.id === productToAdd.id 
     ? {...item, quantity: item.quantity + 1} :
    item
    )
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
  
}


const removeItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);
   
  if(existingItem.quantity === 1) {
    return cartItems.map((item) => item.id !== productToRemove.id)
  }

  return cartItems.map((item) => item.quantity === productToRemove.id 
  ? {...item, quantity: - 1}
  : item
  );
}

 
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}

});

export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const addItemToCart =(productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
    console.log(cartItems)
  };



  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems
  
  }


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
