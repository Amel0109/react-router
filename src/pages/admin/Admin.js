import React from 'react';
import './Admin.css';
import ItemCard from '../../components/item-card/ItemCard';

function Admin({ items, isAdmin }) {

    return (
        <div className="Admin">
            {Object.entries(items).map(([key, value]) =>
                <ItemCard
                    name={value.name}
                    availability={value.availability}
                    price={value.price}
                    isAdmin={isAdmin}
                />
            )}
        </div>
    )
};

export { Admin };