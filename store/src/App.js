import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductLists from "./components/ProductLists";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";


class App extends Component {
  render() {
    return (
   <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="/cart" component ={Cart}/>
        <Route path="/details" component={Details}/>
        <Route exact path="/" component={ProductLists}/>


details      </Switch>
   </React.Fragment>
    );
  }
}

export default App;
