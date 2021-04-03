import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Admin } from '../src/pages/admin/Admin';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        {/* <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/item">
          <Item />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route> */}
        <Route path="/">
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
