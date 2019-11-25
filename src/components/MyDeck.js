import React from 'react';

import {Link} from "react-router-dom";



const MyDeck = () => {
    return (
        <div className="container text-center text-white">
            <h1 className="text-white mt-5">My Deck Route</h1>
            <Link to="/" className="btn btn-warning ml-2 mt-4"> Back to home </Link>
        </div>
    );
};



export default MyDeck;
