import { createContext, useState, useEffect } from "react";

//------------------------------------ Add Item -------------------------------

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//------------------------------------ Remove Item -------------------------------

const removeItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

   return cartItems.map((item) =>
  item.id === productToRemove.id
    ? { ...item, quantity: item.quantity - 1 }
    : item
);
  
};

//------------------------------------ Clear Cart -------------------------------

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((Item) => Item.id !== itemToClear.id);
};




//------------------------------- Set local storage ------------------------------

const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  catch (error) {
    console.log(error)
  }
}

//---------------------  get LocalStorage ---------------------------------------


const getLocalStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (error) {
    return initialValue;
  
  }

  }


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: ()=> {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => getLocalStorage('cartItems', []));
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  // useEffect(() => {
  //  window.onunload = () => {
  //    localStorage.removeItem('cartItems')
  //  }
  // },[] )
  

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);


  useEffect(()=> {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price, 0 
    )
    setCartTotal(newCartTotal)
  },[cartItems]);

  useEffect (() => {
   
    setLocalStorage('cartItems',cartItems);
  }, [cartItems]);

 useEffect(() => {
   const items = JSON.parse(localStorage.getItem('cartItems'));
   if (items) {
     setCartItems(items);
     
   }
 },[]);


//-------------------------------------------------------------------------------

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
   
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart, 
    clearItemFromCart,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
