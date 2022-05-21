import React, {FC} from "react";
import { TypeSetState } from '../types';

interface IQuantity {
    count: number,
    setCount: TypeSetState<number>,
}
const Quantity: FC<IQuantity> = ({count, setCount}) => {
    return (
        <div className="flex items-center">
            <button className="font-s" onClick={() => count < 10 && setCount(count + 1)}>+</button>
            <input disabled onChange={e => setCount(+e.target.value)} value={count} type='number' className="mx-2 inputCart"/>
            <button className="font-s" onClick={() => count > 0 && setCount(count - 1)}>-</button>
        </div>
    )
}
export default Quantity;