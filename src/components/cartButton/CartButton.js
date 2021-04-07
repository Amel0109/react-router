import React, { useEffect, useState } from 'react';
import './CartButton.css';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';



function CartButton({ items }) {

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let total = 0;
        for (const item of items) {
            total = total + item.quantity;
        }
        setQuantity(total);
    }, [items]);

    return (
        <div className="CartButton">
            <Link to='/cart'>
                <button className="cart" >
                    <HiShoppingCart />{quantity ? quantity : null}
                </button>
            </Link>
        </div>
    )
};

export default CartButton;