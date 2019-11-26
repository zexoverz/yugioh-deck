import React, {useState, useEffect} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import "./detailCard.css"

import {useParams, Link} from "react-router-dom";

const DetailCard = () => {

    const [card, setCard] = useState({});
    const [imgUrl, setImgUrl] = useState("");

    const {name} = useParams();

    const fetchCard = async (name) =>  {
        Swal.fire({
            title: 'Loading...'
          });
          Swal.showLoading();
          const response = await axios({
            method: "GET",
            url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?name=${name}`
          })
          let cardTemp = response.data[0]
          console.log(cardTemp.card_images[0].image_url)
          setCard(cardTemp)
          setImgUrl(cardTemp.card_images[0].image_url)
          Swal.close();
    }

    useEffect(() => {
        fetchCard(name)
    }, [])

    return (
        <div className="container text-center text-white" >
             <h1 className="text-white mt-3"> {card.name} </h1>

             <Link to="/" className="btn btn-warning">Back to home</Link>

             <div id="detailCard" className="bg-dark container mt-4 d-flex justify-content-between">
                <img src={imgUrl} className="mx-5" id="imgDetail" ></img>
                <div className="detail mt-5  text-left">
                    {/* <p>Name     : Invoked Mechaba </p> */}
                    <p>Type     : {card.type} </p>
                    <p>Level    : {card.level} </p>
                    <p>Race     : {card.race} </p>
                    <p>Attribute: {card.attribute} </p>
                    <p>Archetype: {card.archetype} </p>
                    <p>Desc     : {card.desc} </p>
                    

                </div>
             </div>
        </div>
    )
}

export default DetailCard;
