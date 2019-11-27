import {SET_YUGI, SET_SEARCH, SET_CARD, SET_IMG_URL, SET_DECK_CARDS} from "../actions/index";

const initialState = {
    yugioh: [],
    search: "",
    card: {},
    imgUrl: "",
    deckCards: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_YUGI:
            return {
                ...state,
                yugioh: action.cards
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.filtered
            };
        case SET_CARD:
            return {
                ...state,
                card: action.card
            };
        case SET_IMG_URL:
            return {
                ...state,
                imgUrl: action.url
            };
        case SET_DECK_CARDS:
            return {
                ...state,
                deckCards: action.deck
            };
        default:
            return state;
    }
}

export default reducer;