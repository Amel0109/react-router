import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Item.css';

function Item({ selectedItem }) {

    const history = useHistory();

    useEffect(() => {
        if (!selectedItem) {
            history.push('/Shop')
        }
    }, [])

    if (selectedItem) {


        return (
            <div className="Item">
                <div className="name">{selectedItem.name}</div>
            </div>
        )
    } else return <div>loading...</div>
};

export { Item };
