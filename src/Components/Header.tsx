import React, { FC, useState } from "react";
import logoImg from '../img/threejs.svg';
import cn from 'classname';
import { styleH1 } from "../ObjectStyle/Header";
import { IcartItem } from '../types';
import cartIcon from '../img/bx-cart.svg';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart/action';

const Header:FC = () => {
    const cart = useTypeSelector(state => state.cart)
    const [isShowCart, setIsShowCart] = useState(false);
    const dispatch = useDispatch();
    const total:number = cart.reduce((acc: number, item: IcartItem) => {
        return acc + item.price * item.count
        
    }, 0)
    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
    }
    
    return (
        <div 
        className="py-2 px-8 flex items-center justify-between relative" 
        style={{
            background: 'linear-gradient(90deg, rgba(255, 0, 104,0.6) 0%, rgba(255, 226, 0, 0.6) 100%)',
            boxShadow: '1px 4px 30px 0px rgba(50, 50, 50, 0.7)'
        }}>
            <img src={logoImg} width='50 ' alt="logo"/>

            <button onClick={() => setIsShowCart(!isShowCart)} className="bg-transparent border-none relative">
                <img width='50' src={cartIcon}/>
                <div className="text-rose-500 absolute bottom-4 right-3 font-bold p-2 rounded-full w-5 h-5 flex items-center text-center">{cart.length}</div>
            </button>

            <div className={cn('bg-slate-400 absolute top-3 right-0 shadow-md p-5 rounded-md', {
                hidden: !isShowCart
            })}
            style={{
                top: 'calc(61px + 1rem)'
            }}
            >
                {cart.map(item => (
                    
                    <div className="flex items-center mb-4" key={`cart item ${item.id}`}>
                        
                        
                        <img 
                        className="mr-3" 
                        src={item.imagePath} 
                        alt={item.name} 
                        width='55' 
                        height='55'/>
                        <div > 
                            <p 
                            className="">
                                {item.name}
                                
                                
                            </p>
                            <div>{`${item.count} x ${item.price.toLocaleString()}`}</div>
                            <button 
                            className="bg-none text-red-600"
                            onClick={()=> removeHandler(item.id)}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                ))}
                <p className="text-lg border-solid border-t-2 border-red-100 pt-1 mt-2">
                    Total: <b>{total.toLocaleString()}p</b>
                </p>
            </div>
        </div>
    );
}

export default Header;