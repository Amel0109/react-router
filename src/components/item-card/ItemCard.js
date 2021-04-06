import React from 'react';
import './ItemCard.css';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function ItemCard({ id, name, availability, price, quantity, isAdmin, onQuantityChange, onDeleteClick, onItemClick }) {
    return (
        <div className="ItemCard" >
            <div className="name-cart">
                <span className="name">{name}</span>

                {(quantity > 0) ?
                    <Link to='/cart'>
                        <button><HiShoppingCart /></button>
                    </Link> :
                    null}

            </div>
            <div className="pic-container" onClick={() => onItemClick(id)}>
                <img alt="pic" src="https://img.icons8.com/color/1600/grocery-bag.png"
                    width="100"
                    height="100"
                />
            </div>
            {!isAdmin ?
                <div className="button-container">
                    <button
                        onClick={() => onQuantityChange(id, '-')}
                        disabled={quantity === 0}
                    >-</button>
                    <span className="quantity">{quantity}</span>
                    <button
                        onClick={() => onQuantityChange(id, '+')}
                        disabled={availability === 0}
                    >+</button>
                </div>
                : null
            }
            <div className="availability">
                <label>Available:</label>
                <span>{availability}</span>
            </div>
            <div className="price">
                <label>Price:</label>
                <span>{price}$</span>
            </div>
            {isAdmin ?
                <div className="button-cont">
                    <button onClick={() => onDeleteClick(id)}>Delete</button>
                    <button>Edit</button>
                </div>
                : null
            }
        </div >
    )
};

export default ItemCard;