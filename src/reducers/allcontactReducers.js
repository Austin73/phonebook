export function allcontactsReducers(state=[
    {
        id:1,
        name:"Virat Kohli",
        phone:"98437987384",
        email :"vitarto@gamil.com",
        isFav:false
    },
    {
        id:2,
        name:"Rohit Sharma",
        phone:"9873643332",
        email :"rohitsharma@gmail.com",
        isFav:false
    },
    {
        id:3,
        name:"MS DHOni",
        phone:"9873643332",
        email :"msdhoni@gmail.com",
        isFav:false
    }
],action){

    switch(action.type){
        case "NEW_CONTACT" :
            return [...state, {...action.payload ,isFav:false, id: (state?state[state.length -1].id+1 :0)}]
        case "TOGGLE_FAV" :
            let copystate= [...state];
            state.forEach((ele,i)=>{
                if(action.payload === ele.id)
                {
                    copystate[i].isFav= !state[i].isFav;
                }
            })
            return copystate
        default:
            return state
    }
}