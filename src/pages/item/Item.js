import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Item.css';

function Item({ getItem }) {


    const history = useHistory();
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const temp = getItem(id);
        if (temp) {
            setItem(temp)
        } else {
            history.push('/shop')
        }
    }, [id])

    if (item) {


        return (
            <div className="Item">
                <div className="name">{item.name}</div>
            </div>
        )
    } else return <div>loading...</div>
};

export { Item };
