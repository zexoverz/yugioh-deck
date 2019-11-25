import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase/app";
import "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyAsqR4sSHAEepXA4VLMhXM7YlFLJMQEbBM",
    authDomain: "yugioh-reactapp.firebaseapp.com",
    databaseURL: "https://yugioh-reactapp.firebaseio.com",
    projectId: "yugioh-reactapp",
    storageBucket: "yugioh-reactapp.appspot.com",
    messagingSenderId: "354373350708",
    appId: "1:354373350708:web:08335a47134fd83811e161"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


