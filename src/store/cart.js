const ADD_TO_CART = 'cart/ADD'
const REMOVE_FROM_CART = 'cart/REMOVE'
const SUB_FROM_CART = 'cart/SUBTRACT'
const PURCHASE = 'cart/PURCHASE'

export const addToCart = (produceItem) => {
    return { type: ADD_TO_CART, produceItem }
}



export const removeFromCart = (produceItem) => {
    return { type: REMOVE_FROM_CART, produceItem }
}

export const subFromCart = (produceItem) => {
    return { type: SUB_FROM_CART, produceItem }
}

export const purchase = () => {

    return { type: PURCHASE }
}

export default function cartReducer(state = {}, action) {

    switch (action.type) {
        case ADD_TO_CART:

            let newState = { ...state }
            let { id } = action.produceItem

            if (id in newState) {
                newState[id].count++
            } else {
                newState[id] = { id: id, count: 1 }
            }

            return newState
        case REMOVE_FROM_CART:

            let newState2 = { ...state }
            let id2 = action.produceItem

            // console.log('produceItem----', action.produceItem)
            // console.log('id2---', id2)
            // console.log('newState2---', newState2)

            delete newState2[id2]
            return newState2
        case SUB_FROM_CART:

            const newState3 = { ...state }
            const { id: id3 } = action.produceItem

            if (newState3[id3].count === 1) {

                delete newState3[id3]
            } else { newState3[id3].count-- }

            return newState3

        case PURCHASE:
            const newState4 = {}
            return newState4

        default:
            return state;
    }
}
