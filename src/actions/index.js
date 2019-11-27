import axios from "axios";

export const fetchYugi = () => async dispatch => {
    const response = await axios({
        method: "GET",
        url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
      })
    let cards = response.data.slice(700,752)
    dispatch({
        type: "SET_YUGI",
        cards: cards
    })
}

export const findCard = (searchYugi) => async dispatch => {
    const response = await axios({
        method: "GET",
        url: "https://db.ygoprodeck.com/api/v5/cardinfo.php"
    })
    let cards = response.data
    let filtered = cards.filter(card => {
    return card.name.toLowerCase().includes(searchYugi.toLowerCase())
    })
    dispatch({
        type: "SET_YUGI",
        cards: filtered
    })
}

export const fetchDetail = (name) => async dispatch => {
    const response = await axios({
        method: "GET",
        url: `https://db.ygoprodeck.com/api/v5/cardinfo.php?name=${name}`
    })
    let cardTemp = response.data[0]
    dispatch({
          type: "SET_CARD",
          card: cardTemp
    })
    dispatch({
          type: "SET_IMG_URL",
          url: cardTemp.card_images[0].image_url
    })
}