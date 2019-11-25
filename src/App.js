import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios";

const fetchYugi = async () => {
  const response = await axios({
    method: "GET",
    url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
  })

  return response.data
}




class App extends Component { 

  constructor(){
    super()

    this.state = {
      title: "Yu Gi Oh World",
      yugioh: [],
      search: ""
    };
  }

  // filteredList() {
  //   return this.postList.filter(post => {
  //     return post.title.toLowerCase().includes(this.search.toLowerCase())
  //   })
  // }

  async componentDidMount() {
    let cards = await fetchYugi()
    let filtered = cards.filter(card => {
      return card.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    this.setState({
      yugioh: filtered
    })

    
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <div className="container text-center">
        {/* <h1 className="mr-5">faisal</h1> */}
        <h2 className="mr-5 mt-5">{this.state.title}</h2>

        <h4 className="mr-5 mt-5">Find Some Cards</h4>
        <input value={this.state.search} onChange={this.handleChange.bind(this)} type="text" className="mr-5 col-4"></input>
        
        <div id="cardList" className="row mt-5 ">
        {
          this.state.yugioh.map(card => 
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


        {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
         </Card.Body>
        </Card> */}

        </div>
        
      </div>
    );
  }
}

export default App;

