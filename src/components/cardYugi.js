import React from 'react';

import { Card } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

import "./cardYugi.css";

import {useHistory} from "react-router-dom";

const CardYugi = (props) => {

    const history = useHistory();

    const handleClick = (card) => {
        props.addEvent(card)
    }

    const handleDetail = (card) => {
        history.push(`/Detail/${card.name}`)
    }

    return (
        <div id="cardList" className="row mt-5 ">
        {
            props.yugioh.map(card => 
            <Card style={{ width: '18rem' }} className="col-3 bg-dark" key={card.id}>
            <Card.Img variant="top" id="img" onClick={() => handleDetail(card)} src={card.card_images[0].image_url} />
            <Card.Body>
            <Button variant="primary" className=" col-sm-7-xs " onClick={() => handleClick(card)}>Add to Deck</Button>
            </Card.Body>
            </Card>
            )
        }
        </div>
    );
};


export default CardYugi;
