
export default function cartReducer(state = {}, action) {
    switch (action.type) {



        default:
            return state;
    }
}

const addToCart = (produceItem) => {

    return { ...state, cart: { produceItem: { id, count } } }

}
