
export function new_contact (contact){
    return{
        type: 'NEW_CONTACT',
        payload:contact
    }
}
export function toggle_fav (id){
    return{
        type:'TOGGLE_FAV',
        payload:id
    }
}

export function change_name (name){
    return{
        type:"CHANGE_NAME",
        payload:name
    }
}
export function change_mobile (phone){
    return{
        type:"CHANGE_MOBILE",
        payload:phone
    }
}
export function change_email (email){
    return{
        type:"CHANGE_EMAIL",
        payload:email
    }
}

export function add_recent(obj)
{
    return{
        type:'ADD_RECENT',
        payload:obj
    }
}