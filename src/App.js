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
import history from "./history";

import './App.css';


const App = () =>  {
  
  

  useEffect(() => {
    history.push("/")
  }, [])
  
  
  return (
    <Router history={history}>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/MyDeck" component={MyDeck}></Route>

    </Router>
  )
}

export default App;

