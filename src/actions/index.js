import axios from "axios";

export const fetchYugi = () => async dispatch => {
    const {data} = await axios({
        method: "GET",
        url: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
      })
    let cards = data.data.slice(700,752)
    dispatch({
        type: "SET_YUGI",
        cards: cards
    })
}

export const findCard = (searchYugi) => async dispatch => {
    const {data} = await axios({
        method: "GET",
        url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchYugi}`
    })
    let filtered = data.data
    dispatch({
        type: "SET_YUGI",
        cards: filtered
    })
}

export const fetchDetail = (name) => async dispatch => {
    const {data} = await axios({
        method: "GET",
        url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
    })
    let cardTemp = data.data[0]
    dispatch({
          type: "SET_CARD",
          card: cardTemp
    })
    dispatch({
          type: "SET_IMG_URL",
          url: cardTemp.card_images[0].image_url
    })
}