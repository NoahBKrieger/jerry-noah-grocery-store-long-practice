import produceData from '../mockData/produce.json'
const POPULATE = 'produce/POPULATE'



export function populateProduce() {

    return { type: POPULATE, produce: produceData }

}


export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            let resObj = {}
            action.produce.forEach((el) => { resObj[el.id] = el })
            return resObj;

        default:
            return state;
    }
}
