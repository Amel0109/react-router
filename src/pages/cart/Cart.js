import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart({ items }) {

    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        let total = 0;
        for (const item of items) {
            total = total + item.quantity * item.price;
        }
        setTotalPrice(total)
    }, [items])

    return (
        <div className="Cart">
            <header className="header">Cart</header>
            {items.map(item =>
                <div className="items">
                    <label>{item.name}</label>
                    <span>{item.quantity} x {item.price}$</span>
                </div>
            )}
            <div className="total">
                <label>Total price</label>
                <span>{totalPrice}$</span>
            </div>
        </div>
    )
};

export { Cart };