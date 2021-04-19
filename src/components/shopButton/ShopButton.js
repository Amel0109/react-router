import React from 'react';
import './ShopButton.css';
import { AiTwotoneShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ShopButton() {
    return (
        <div className="ShopButton">

            <Link to='/shop'>
                <button className="shop">
                    <AiTwotoneShopping />
                </button>
            </Link>
        </div >
    )
};

export default ShopButton;