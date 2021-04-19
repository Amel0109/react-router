import React, { useEffect, useState } from 'react';
import ShopButton from '../../components/shopButton/ShopButton';
import './AddForm.css';

const emptyForm = {
    name: '',
    availability: 0,
    price: 0
};

function AddForm({ onSave, selectedItem }) {

    const [formData, setFormData] = useState({ ...emptyForm });

    useEffect(() => {
        if (selectedItem) {
            setFormData(selectedItem);
        }
    }, [selectedItem]);

    const onFormChange = (event, key) => {
        const data = { ...formData };
        data[key] = event.target.value;
        setFormData(data);
    };

    const onClear = () => {
        setFormData({ ...emptyForm })
    };

    return (
        <div className="AddForm">
            <label className="add-label">Add item:</label>
            <input
                type="text"
                placeholder="item"
                value={formData.name}
                onChange={(event) => onFormChange(event, 'name')}
            />
            <input
                type="number"
                placeholder="availability"
                value={formData.availability}
                onChange={(event) => onFormChange(event, 'availability')}
            >
            </input>
            <input
                type="number"
                placeholder="price"
                value={formData.price}
                onChange={(event) => onFormChange(event, 'price')}
            >
            </input>
            <div className="button-container-add">
                <button onClick={onClear}>Clear</button>
                <button onClick={() => { onSave(formData); setFormData({ ...emptyForm }) }}>Save</button>
            </div>
            <ShopButton />
        </div>
    )
};

export default AddForm;