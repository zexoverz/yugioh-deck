import React from 'react';

import { Card } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

const cardYugi = (props) => {

    const handleClick = (card) => {
        props.addEvent(card)
    }

    return (
        <div id="cardList" className="row mt-5 ">
        {
            props.yugioh.map(card => 
            <Card style={{ width: '18rem' }} className="col-3 bg-dark" key={card.id}>
            <Card.Img variant="top" src={card.card_images[0].image_url} />
            <Card.Body>
            <Button variant="primary" onClick={() => handleClick(card)}>Add to Deck</Button>
            </Card.Body>
            </Card>
            )
        }
        </div>
    );
};


export default cardYugi;
