import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { useParams } from "react-router-dom";

import BurgerComponent from "../../components/burger/burger-component";
import "./burgers.styles.scss";

export default function Burgers() {
  const { productsMap } = useContext(ProductsContext);
  const { category } = useParams();
  const products = productsMap[category];
  
  

  return (
    <div className="burger-container">
      { products && products.map((product) => (
        <BurgerComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
