import React, {FC, useState} from "react";
import { useDispatch } from "react-redux";
import { IProduct } from '../types';
import Quantity from "./Quantity";
import { addToCart } from '../store/cart/action';
interface IProductItem  {
    product: IProduct,
}
const ProductItem:FC<IProductItem> = ({product}) => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const addHandler = () => {
        if(count > 0){
            dispatch(addToCart(product, count))
        }else {
            alert('Выбрано нулевое количество!')
        }
        
        
    }

    return (
        <div className="bg-white flex justify-center flex-col mx-1 mb-2 shadow-sm rounded-md p-1 w-4/5  text-center items-center MyStForPrItem max-w-xs">
            <div className='minImg' >
                <img className="rounded-lg" src={product.imagePath} alt={product.name} width='150' />
            </div>
            <p className="text-lg font-bold min-h-60">{product.name}</p>
            <p className="text-sm text-gray-600"> {product.price}p </p>
            <Quantity count={count} setCount={setCount}/>
            <button className="py-1 px-3 bg-pink-500 font-semibold text-white rounded-sm w-2/4" onClick={addHandler}>Add in cart</button>
        </div>
    )
}

export default ProductItem;