import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";

import BurgerComponent from "../../components/burger/burger-component";
import "./burgers.styles.scss";



export default function Burgers() {

  const {products} = useContext(ProductContext);
  
  return (
    <div className="burger-container">
      {products.map((product) => (
        <BurgerComponent key={product.id} product={product} />
        
      ))}
      
    </div>
  );
}
