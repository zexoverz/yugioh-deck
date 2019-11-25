import React from 'react';

import { Card } from 'react-bootstrap';

import { Button } from 'react-bootstrap';


const Deck = (props) => {
    return (
        <div className="row mt-5">
        {
            props.deckCards.map(card => 
            <Card style={{ width: '18rem' }} className="col-3 bg-dark" key={card.id}>
            <Card.Img variant="top" src={card.card_images[0].image_url} />
            <Card.Body>
            <Button variant="danger">Delete</Button>
            </Card.Body>
            </Card>
            )
        }
        </div>
    );
};





export default Deck;
