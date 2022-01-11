export function recentreducer(state=[],action){
    const maxRecentSize=10;
    switch(action.type){
        case "ADD_RECENT" :
            let newState=[...state]
            if(newState.length === maxRecentSize)
            {
                newState.shift()
            }
            newState.push(action.payload)
            return newState
        default:
            return state
    }
}