import React from 'react';
import './ItemCard.css';

function ItemCard({ name, availability, price }) {
    return (
        <div className="ItemCard">
            <span className="name">{name}</span>
            <div className="pic-container">
                <img alt="pic" src="https://img.icons8.com/color/1600/grocery-bag.png"
                    width="100"
                    height="100"
                />
            </div>
            <div className="availability">
                <label>Available:</label>
                <span>{availability}</span>
            </div>
            <div className="price">
                <label>Price:</label>
                <span>{price}$</span>
            </div>
        </div>
    )
};

export default ItemCard;