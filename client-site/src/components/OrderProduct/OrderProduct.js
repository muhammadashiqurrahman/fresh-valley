import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const OrderProduct = (props) => {
    const {productName, price} = props.ord
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
        decrementCounter = () => setCounter(1);
    }
    return (
        <tr>
            <td>{productName}</td>
            <td><b>{price} TK</b></td>
            <td>
                <div className="increDecre">
                    <Button onClick={decrementCounter}>-</Button> <span>{counter}</span> <Button onClick={incrementCounter}>+</Button>
                </div>
            </td>
        </tr>
    );
};

export default OrderProduct;