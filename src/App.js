import React, {
  Component,useState,useEffect
} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import CardYugi from "./components/cardYugi";



const App = () =>  {
  
  const [title,setTitle] = useState("Yu Gi Oh World")
  const [yugioh, setYugi] = useState([]);
  const [search, setSearch] = useState("");
  
  
  useEffect(async () => {
    const response = await axios({
      method: "GET",
      url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
    })
    let cards = response.data

    setYugi(cards.slice(500,552))
  }, [])


  const handleChange = (event) => {
  setSearch(event.target.value)

  }
  
  
 const fetchYugi = async (e, searchYugi) => {
   e.preventDefault();
    const response = await axios({
      method: "GET",
      url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
    })
    let cards = response.data
    let filtered = cards.filter(card => {
    return card.name.toLowerCase().includes(searchYugi.toLowerCase())
    })
    setYugi(filtered)
 }
  
  return (
    <div className="container text-center">
        <h2 className="mr-5 mt-5">{title}</h2>

        <h4 className="mr-5 mt-5">Find Some Cards</h4>
        <form onSubmit={(e) => fetchYugi(e, search)}>
          <input value={search} onChange={handleChange}  type="text" className="mr-2 col-4"></input>
          <button className="btn btn-success" type="submit">Find Cards</button>
        </form>
        
        <CardYugi yugioh={yugioh}></CardYugi>
        
        
      </div>
  )
}

export default App;

