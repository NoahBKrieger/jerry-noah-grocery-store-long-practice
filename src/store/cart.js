const ADD_TO_CART = 'cart/ADD'

export const addToCart = (produceItem) => {
    return { type: ADD_TO_CART, produceItem }
}

export default function cartReducer(state = {}, action) {

    switch (action.type) {
        case ADD_TO_CART:

            const newState = { ...state }
            const { id } = action.produceItem

            if (id in newState) {
                newState[id].count++
            } else {
                newState[id] = { id: id, count: 1 }
            }

            return newState

        default:
            return state;
    }
}



// export const addToCart = (state, produceItem) => {

//     let cart = {}

//     if (state.cart) cart = { ...state.cart }

//     const { id } = produceItem

//     if (id in cart) {
//         cart[id].count++
//     } else {

//         cart.id = { id: id, count: 1 }

//     }

//     return {
//         type: ADD_TO_CART,
//         ...state, cart
//     }
// }
