import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CustomButton from "../custom-button/custom-button";
import "./burger-component.styles.scss";

export default function BurgerComponent({ product }) {
  const { name, ingredients, imgUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);



  return (
    <div
      className="burger-component"
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "auto" }}
    >
      <div className="burger-content">
        <div className="">
          <h1>{name}</h1>
          <div className="">
            <ul>
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p>$ {price}</p>
          <div className="">
            <CustomButton onClick={addProductToCart} className={"red"}>ADD TO CART</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
