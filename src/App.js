import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Admin } from '../src/pages/admin/Admin';
import { Shop } from '../src/pages/shop/Shop';


function App() {

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

  const [isAdmin, setIsAdmin] = useState(true)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin">
          <Admin
            items={items}
            isAdmin={isAdmin}
          />
        </Route>
        <Route exact path="/shop">
          <Shop
            items={items}
            isAdmin={!isAdmin}
            setItems={setItems}
          />
        </Route>
        {/* <Route exact path="/item">
          <Item />
        </Route>
        <Route exact path="/cart">
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
