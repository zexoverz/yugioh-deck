import React, {
    Component,useState,useEffect
} from 'react';

import {useHistory, Link} from "react-router-dom";

import axios from "axios";
import CardYugi from "./cardYugi";
import Swal from "sweetalert2";
import logo2 from "../logo2.png";



const Home = () => {

    const [yugioh, setYugi] = useState([]);
    const [search, setSearch] = useState("");
    
    const fetchYugi = async () => {
        Swal.fire({
            title: 'Loading...'
          });
          Swal.showLoading();
          const response = await axios({
            method: "GET",
            url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
          })
          let cards = response.data
          setYugi(cards.slice(500,552))
          Swal.close();
    }

    useEffect( () => {
        fetchYugi();
    }, [])
  
  
    const handleChange = (event) => {
    setSearch(event.target.value)
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
      setYugi(filtered)
      Swal.close();
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
        
        <CardYugi yugioh={yugioh} ></CardYugi>
        
        
      </div>
    );
};
 




export default Home;
