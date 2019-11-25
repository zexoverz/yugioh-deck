import React, {
  Component,useState,useEffect
} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios";




const App = () =>  {

 
  
  const [title,setTitle] = useState("Yu Gi Oh World")
  const [yugioh, setYugi] = useState([]);
  const [search, setSearch] = useState("");
  
  

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
    // if (search.length > 1){
    //   setYugi(filtered)
    // }
    console.log("trigerred")
    setYugi(filtered)
 }
  
  return (
    <div className="container text-center">
        {/* <h1 className="mr-5">faisal</h1> */}
        <h2 className="mr-5 mt-5">{title}</h2>

        <h4 className="mr-5 mt-5">Find Some Cards</h4>
        <form onSubmit={(e) => fetchYugi(e, search)}>
          <input value={search} onChange={handleChange}  type="text" className="mr-2 col-4"></input>
          <button className="btn btn-success" type="submit">Find Cards</button>
        </form>
        
        
        <div id="cardList" className="row mt-5 ">
        {
          yugioh.map(card => 
            <Card style={{ width: '18rem' }} className="col-3 " key={card.id}>
            <Card.Img variant="top" src={card.card_images[0].image_url} />
            <Card.Body>
            {/* <Card.Title>{card.name}</Card.Title> */}
            {/* <Card.Text>
            {card.desc}
            </Card.Text> */}
            <Button variant="primary">Add to Deck</Button>
            </Card.Body>
            </Card>
          )
        }

        </div>
        
      </div>
  )
}





// class App extends Component { 

//   constructor(){
//     super()

//     this.state = {
//       title: "Yu Gi Oh World",
//       yugioh: [],
//       search: ""
//     };
//   }

//   // filteredList() {
//   //   return this.postList.filter(post => {
//   //     return post.title.toLowerCase().includes(this.search.toLowerCase())
//   //   })
//   // }

//   async componentDidMount() {
    
//     this.setState({
//       yugioh: filtered
//     })

    
//   }


//   render() {
//     return (
      
//     );
//   }
// }

export default App;

