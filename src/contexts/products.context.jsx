import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../firebase/firebase.js";

import {getProductsAndDocuments} from "../firebase/firebase.js"



import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    productsMap: {},
});


export const ProductsProvider = ({children}) => {
    const [productsMap, setProductsMap] = useState({});
    
    //--------------------------add products to database --------------------------------
    useEffect(() => {
        addCollectionAndDocuments('products', SHOP_DATA)
    },[])
//----------------------- get products from databese -------------------------------------
    useEffect(() => {
        const getProductsMap = async () => {
            const productsMap = await getProductsAndDocuments();
            // console.log(productsMap);
            setProductsMap(productsMap)
        }
        getProductsMap();
    },[])
    
    const value = {productsMap};

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}