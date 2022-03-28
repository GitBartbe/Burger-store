import BurgerComponent from "../../components/burger/burger-component";
import "./burgers.styles.scss";
import { burgerList } from "../../components/burger/bugrers";

export default function Burgers() {

  return (
    <div className="burger-container">
      {burgerList.map(({name, ingredients, price,id,imgUrl}) => (
        <BurgerComponent key={id} name={name} ingredients={ingredients} price={price} imgUrl={imgUrl} />
      ))}
    </div>
  );
}
