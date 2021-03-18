import './App.css';
import React from 'react';
import Login from './components/users/Login';
import Register from './components/users/Register';
import User from './components/users/User';
import Product from './components/products/Product';
import ProductDetails from './components/products/ProductDetails';
import Order from './components/orders/Order';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/user' component={User} />
      <Route path='/product' exact component={Product} />
      <Route path='/product/:id' component={ProductDetails} />
      <Route path='/order' component={Order} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
