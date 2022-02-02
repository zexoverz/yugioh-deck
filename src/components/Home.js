import React, {
  useEffect
} from 'react';

import {useHistory, Link} from "react-router-dom";

import axios from "axios";
import CardYugi from "./cardYugi";
import Swal from "sweetalert2";
import logo2 from "../logo2.png";
// import firebase from "firebase/app";
// import "firebase/firestore";
import {connect, useSelector, useDispatch} from "react-redux";
import {fetchYugi, findCard} from "../actions/index";


const Home = (props) => {

    const dispatch = useDispatch();
    const {yugioh,search} = props;
    const fetchCards = async () => {
        Swal.fire({
            title: 'Loading...'
          });
          Swal.showLoading();
        let success = await props.dispatch(fetchYugi());
        Swal.close();
    }
    let myDeckCards = useSelector(state => state.deckCards);

    useEffect( () => {
      if(yugioh.length < 1) {
        fetchCards();
      }
    }, [])
  
  
    const handleChange = (event) => {
      props.dispatch({
        type: "SET_SEARCH",
        filtered: event.target.value
      })
    }
    
    
   const findYugi = async (e, searchYugi) => {
     e.preventDefault();
  
      Swal.fire({
        title: 'Loading...'
      });
      Swal.showLoading();
      let success = await props.dispatch(findCard(searchYugi))
      Swal.close();
   }

   const addEvent = async (card) => {
    Swal.fire({title: 'Loading...'});
    Swal.showLoading();

    console.log(myDeckCards)

    myDeckCards.push(card)

    dispatch({
      type: "SET_DECK_CARDS",
      deck: myDeckCards
    })

    Swal.close();
    Swal.fire("Good job!", "Add Card Success", "success");

   }

   

    return (
        <div className="container text-center text-white">
       
        <img src={logo2} width="400px;" className="mr-3"></img>

        
        <h4 className="mr-5 ">Find Some Cards</h4>
        <form onSubmit={(e) => findYugi(e, search)}>
          <input value={search} onChange={handleChange}  type="text" className=" ml-5  col-4"></input>
          <button className="btn btn-dark ml-2" type="submit">Find Cards</button>
          <Link to="/MyDeck" className="btn btn-warning ml-4"> MyDeck </Link>
        </form>
        
        <CardYugi yugioh={yugioh} addEvent={addEvent} ></CardYugi>
        
        
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    yugioh: state.yugioh,
    search: state.search,
  };
}
 




export default connect(mapStateToProps)(Home);
