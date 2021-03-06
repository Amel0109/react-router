import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import { Admin } from '../src/pages/admin/Admin';
import { Shop } from '../src/pages/shop/Shop';
import { Item } from '../src/pages/item/Item';
import { Cart } from '../src/pages/cart/Cart';
import AddForm from './pages/addForm/AddForm';


function App() {

  const history = useHistory();

  const [items, setItems] = useState({
    '1': {
      name: 'Brasno',
      availability: 36,
      price: 18.99,
      id: 1
    },
    '2': {
      name: 'Ulje',
      availability: 78,
      price: 6.99,
      id: 2
    },
    '3': {
      name: 'Secer',
      availability: 52,
      price: 23.99,
      id: 3
    },
  });

  const [quantity, setQuantity] = useState({
    '1': 0,
    '2': 0,
    '3': 0
  });

  const [isAdmin, setIsAdmin] = useState(true);
  const [idCounter, setIdCounter] = useState(4);
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (id) => {
    history.push(`/item/${id}`);
  };

  const getItem = (id) => {
    return items[id] ? items[id] : null;
  };

  const boughtItems = Object.entries(quantity)
    .filter(item => item[1] > 0)
    .map(([key, value]) => {
      return {
        name: items[key].name,
        price: items[key].price,
        quantity: value
      }
    });

  const onSave = (newItem) => {
    if (newItem.id) {
      const data = { ...items };
      data[newItem.id] = newItem;
      setItems(data);
    } else {
      const data = { ...items };
      const quan = { ...quantity };
      data[idCounter] = newItem;
      quan[idCounter] = 0;
      setItems(data);
      setQuantity(quan)
      setIdCounter(idCounter + 1);
    }
    setSelectedItem(null);
  };

  const onEditClick = (key) => {
    setSelectedItem(items[key]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin">
          <Admin
            items={items}
            isAdmin={isAdmin}
            setItems={setItems}
            onItemClick={onItemClick}
            onEditClick={onEditClick}
          />
        </Route>
        <Route exact path="/shop">
          <Shop
            quantity={quantity}
            setQuantity={setQuantity}
            items={items}
            isAdmin={!isAdmin}
            setItems={setItems}
            onItemClick={onItemClick}
            boughtItems={boughtItems}
          />
        </Route>
        <Route exact path='/item/:id'>
          <Item getItem={getItem} />
        </Route>
        <Route exact path="/cart">
          <Cart items={boughtItems} />
        </Route>
        <Route exact path="/add">
          <AddForm
            onSave={onSave}
            selectedItem={selectedItem}
          />
        </Route>
        <Route path="/">
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
