
const initialState = []

export default function(state=initialState, action) {
    switch(action.type) {
        case "add": {
            if (!state.includes(action.payload)) {
                return [...state, action.payload]
            } else {
                return state
            }
        }
        case "remove": {
            return state.filter(item => item !== action.payload)
        }
        default:
            return state
    }

}