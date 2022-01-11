export function NewContactReducers(state={
    name:'',
    phone:'',
    email:''
},action){

    switch(action.type){
        case "CHANGE_NAME" :
            return {...state ,name:action.payload}
        case "CHANGE_MOBILE" :
            return {...state ,phone:action.payload}
        case "CHANGE_EMAIL" :
            return {...state ,email:action.payload}
        default:
            return state
    }
}