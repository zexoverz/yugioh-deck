import React, {
  useEffect
} from 'react';

import {useHistory, Link} from "react-router-dom";

import axios from "axios";
import CardYugi from "./cardYugi";
import Swal from "sweetalert2";
import logo2 from "../logo2.png";
import firebase from "firebase/app";
import "firebase/firestore";
import {connect} from "react-redux";


const Home = (props) => {

    
    const fetchYugi = async () => {
        Swal.fire({
            title: 'Loading...'
          });
          Swal.showLoading();
          const response = await axios({
            method: "GET",
            url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
          })
          let cards = response.data.slice(700,752)
          props.dispatch({
            type: "SET_YUGI",
            cards: cards
          })
          Swal.close();
    }

    useEffect( () => {
        fetchYugi();
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
      const response = await axios({
        method: "GET",
        url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
      })
      let cards = response.data
      let filtered = cards.filter(card => {
      return card.name.toLowerCase().includes(searchYugi.toLowerCase())
      })
      props.dispatch({
        type: "SET_YUGI",
        cards: filtered
      })
      Swal.close();
   }

   const addEvent = async (card) => {
    Swal.fire({
        title: 'Loading...'
      });
      Swal.showLoading();
    const addSuccess = await firebase
       .firestore()
       .collection("Deck")
       .doc(card.id)
       .set(card)
    
    Swal.close();
    Swal.fire("Good job!", "Add Card Success", "success");

   }

   const {yugioh,search} = props

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
    search: state.search
  };
}
 




export default connect(mapStateToProps)(Home);
