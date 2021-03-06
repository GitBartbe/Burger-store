import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  
 
 
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  }

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <CustomButton onClick={goToCheckout} className={"red"}>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
