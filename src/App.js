import React, {
  Component,useState,useEffect
} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import CardYugi from "./components/cardYugi";
import Swal from "sweetalert2";
import logo2 from "./logo2.png";



const App = () =>  {
  
  // const [title,setTitle] = useState("Yu Gi Oh World")
  const [yugioh, setYugi] = useState([]);
  const [search, setSearch] = useState("");
  
  
  useEffect(async () => {

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
  }, [])


  const handleChange = (event) => {
  setSearch(event.target.value)
  }
  
  
 const fetchYugi = async (e, searchYugi) => {
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
        {/* <h2 className="mr-5 mt-5">{title}</h2> */}
        <img src={logo2} width="400px;" className="mr-3"></img>
        <h4 className="mr-5 ">Find Some Cards</h4>
        <form onSubmit={(e) => fetchYugi(e, search)}>
          <input value={search} onChange={handleChange}  type="text" className="mr-2 col-4"></input>
          <button className="btn btn-dark" type="submit">Find Cards</button>
        </form>
        
        <CardYugi yugioh={yugioh} ></CardYugi>
        
        
      </div>
  )
}

export default App;

