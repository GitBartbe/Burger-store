import CustomButton from "../custom-button/custom-button";
import "./burger-component.styles.scss";

export default function BurgerComponent({ name, ingredients, price,imgUrl }) {

  console.log(imgUrl)
  
  return (
    <div className="burger-component" style={{ backgroundImage: `url(${ imgUrl})`, backgroundSize: 'auto' }} >
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
            <CustomButton className={"red"}>ADD TO CART</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
