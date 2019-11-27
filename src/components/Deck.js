import React from 'react';

import { Card } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

import "./cardYugi.css"

import {useHistory} from "react-router-dom";

const Deck = (props) => {

    const history = useHistory();
    const handleDelete = (card) => {
        props.handleDelete(card);
    }

    const handleDetail = (card) => {
        history.push(`/Detail/${card.name}`)
    }

    return (
        <div className="row mt-5">
        {
            props.deckCards.map(card => 
            <Card style={{ width: '18rem' }} className="col-3 bg-dark" key={card.id}>
            <Card.Img variant="top" id="img" src={card.card_images[0].image_url} onClick={() => handleDetail(card)} />
            <Card.Body>
            <Button variant="danger" onClick={() => handleDelete(card)} >Delete</Button>
            </Card.Body>
            </Card>
            )
        }
        </div>
    );
};





export default Deck;
