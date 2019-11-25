import React, {useState, useEffect} from 'react';

import {Link} from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import Swal from "sweetalert2";
import Deck from "./Deck";




const MyDeck = () => {

    const [deckCards, setDeckCards] = useState([]);


    const fetchDeck = () => {
        Swal.fire({
            title: 'Loading...'
          });
          Swal.showLoading();
        let myDeckCards = [];
        firebase
          .firestore()
          .collection("Deck")
          .onSnapshot(querySnapshot => {
              querySnapshot.forEach(doc => {
                let card = {
                    id: doc.id
                }

                card.name = doc.data().name;
                card.archetype = doc.data().archetype;
                card.card_images = doc.data().card_images;
                card.desc = doc.data().desc;

                myDeckCards.push(card);
              })
            setDeckCards(myDeckCards);
            Swal.close();
          });
        
        
    }

    useEffect(() => {
        fetchDeck();
    }, [])


    return (
        <div className="container text-center text-white">
            <h1 className="text-white mt-5">My Deck </h1>
            <Link to="/" className="btn btn-warning ml-2 mt-4"> Back to home </Link>
            <Deck deckCards={deckCards}></Deck>
        </div>
    );
};



export default MyDeck;
