import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import { Admin } from '../src/pages/admin/Admin';
import { Shop } from '../src/pages/shop/Shop';
import { Item } from '../src/pages/item/Item';


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

  const [isAdmin, setIsAdmin] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (id) => {
    const item = { ...items[id] };
    setSelectedItem(item);
    history.push('/Item');
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
          />
        </Route>
        <Route exact path="/shop">
          <Shop
            items={items}
            isAdmin={!isAdmin}
            setItems={setItems}
            onItemClick={onItemClick}
          />
        </Route>
        <Route exact path="/item">
          <Item
            selectedItem={selectedItem}
          />
        </Route>
        {/*<Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/add">
          <Items />
        </Route> */}
        <Route path="/">
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
