import React from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import './Shop.css';
import CartButton from '../../components/cartButton/CartButton'

function Shop({ quantity, setQuantity, items, setItems, isAdmin, onItemClick, boughtItems }) {



    const onQuantityChange = (key, sign) => {
        const quan = { ...quantity };
        const itemList = { ...items };
        if (sign === '+') {
            quan[key] = quan[key] + 1;
            itemList[key].availability = itemList[key].availability - 1;
        } else {
            quan[key] = quan[key] - 1;
            itemList[key].availability = itemList[key].availability + 1;
        }
        setQuantity(quan);
        setItems(itemList);
    };

    return (
        <div className="Shop">
            {Object.entries(items).map(([key, value]) =>
                <ItemCard
                    key={key}
                    id={key}
                    name={value.name}
                    availability={value.availability}
                    price={value.price}
                    quantity={quantity[key]}
                    isAdmin={isAdmin}
                    onQuantityChange={onQuantityChange}
                    onItemClick={onItemClick}
                />
            )}
            <div className="cart">
                <CartButton items={boughtItems} />
            </div>
        </div>
    )
};

export { Shop };