import React, {
  Component,useState,useEffect
} from 'react';

import Home from "./components/Home";
import MyDeck from "./components/MyDeck";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

export default class App extends Component {
  render() {
    return (
    <Router >
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/MyDeck" component={MyDeck}></Route>

    </Router>
    )
  }
}


