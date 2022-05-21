import React, {FC} from "react";
import { products } from '../BackEnd/Product';
import { IProduct } from '../types';
import ProductItem from "./ProductsItem";


const Products = () => {
    return (
        <div className="mt-20 m-3 MyStForProd">
         {products.map(product => (
             <ProductItem key={product.id} product={product}/>
         ))}
        </div>
    )
}

export default Products