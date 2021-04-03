import React, { useState } from 'react';
import './Admin.css';
import ItemCard from '../../components/item-card/ItemCard';

function Admin() {

    const [items, setItems] = useState({
        '1': {
            name: 'Brasno',
            availability: 36,
            price: 18.99
        },
        '2': {
            name: 'Ulje',
            availability: 78,
            price: 6.99
        },
        '3': {
            name: 'Secer',
            availability: 52,
            price: 23.99
        },
    });

    return (
        <div className="Admin">
            {Object.entries(items).map(([key, value]) =>
                <ItemCard
                    name={value.name}
                    availability={value.availability}
                    price={value.price}
                />
            )}
        </div>
    )
};

export { Admin };