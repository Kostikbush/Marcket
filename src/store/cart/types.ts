import { IProduct } from "../../types";

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    CART_QTY_ITEM = 'CART_QTY_ITEM',
}

interface ICartAddItemPayload {
    product: IProduct,
    count: number,
}

interface ICartQtyItemPayload {
    type: 'plus' | 'minus',
    product: IProduct,
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM,
    payload: ICartAddItemPayload,
}

interface ICartRemiveItem {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: string,
}

interface ICartQty {
    type: actionTypes.CART_QTY_ITEM,
    payload: ICartQtyItemPayload,
}

export type TypeActionCart = ICartAddItem | ICartRemiveItem | ICartQty;