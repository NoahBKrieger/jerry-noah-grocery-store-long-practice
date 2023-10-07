import produceData from '../mockData/produce.json'
const POPULATE = 'produce/POPULATE'
const LIKE = 'produce/LIKE'

export function populateProduce() {
    return { type: POPULATE, produce: produceData }
}

export const like = (produceItem) => {

    return { type: LIKE, produceItem }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            let resObj = {}
            action.produce.forEach((el) => { resObj[el.id] = el })
            return resObj;
        case LIKE:

            const newState = { ...state }

            newState[action.produceItem.id].liked = !newState[action.produceItem.id].liked

            return newState

        /// weird PREVIOUS AND NEXT STATES

        default:
            return state;
    }
}
