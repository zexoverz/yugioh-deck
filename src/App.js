import React, {
  Component,useState,useEffect
} from 'react';

import {Provider} from "react-redux";
import store from "./store/index";
import Home from "./components/Home";
import MyDeck from "./components/MyDeck";
import Detail from "./components/DetailCard";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <Router >
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Detail/:name" component={Detail}></Route>
      <Route exact path="/MyDeck" component={MyDeck}></Route>
    </Router>
    </Provider>
    )
  }
}


