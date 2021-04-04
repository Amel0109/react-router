import React from 'react';
import './Admin.css';
import ItemCard from '../../components/item-card/ItemCard';

function Admin({ items, setItems, isAdmin, onItemClick }) {

    const onDeleteClick = (id) => {
        const itemList = { ...items };
        delete itemList[id];
        setItems(itemList);
    };

    return (
        <div className="Admin">
            {Object.entries(items).map(([key, value]) =>
                <ItemCard
                    id={key}
                    name={value.name}
                    availability={value.availability}
                    price={value.price}
                    isAdmin={isAdmin}
                    onDeleteClick={onDeleteClick}
                    onItemClick={onItemClick}
                />
            )}
        </div>
    )
};

export { Admin };