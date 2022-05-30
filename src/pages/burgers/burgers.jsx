import { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { useParams,useLocation } from "react-router-dom";

import BurgerComponent from "../../components/burger/burger-component";
import "./burgers.styles.scss";

export default function Burgers() {
  const { productsMap } = useContext(ProductsContext);
  const { category } = useParams();
  const products = productsMap[category];
  const {pathname} = useLocation();
  

  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return (
    <div className="category" >
      <div className="category__title" >
      <h1>{category.charAt(0).toLocaleUpperCase() + category.slice(1) }</h1>
      </div>
    <div className="burger-container">
     
      { products && products.map((product) => (
        <BurgerComponent key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}
