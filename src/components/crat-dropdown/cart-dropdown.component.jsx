import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
  <div className="cart-dropdown-container">
      <div className="cart-items">
          {/* <CartItem /> */}
         <CustomButton className={"red"}>Go to checkout</CustomButton>
      </div>

  </div>
  )
};

export default CartDropdown;
