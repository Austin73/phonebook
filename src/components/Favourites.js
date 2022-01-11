import React from 'react'
import { useSelector } from 'react-redux'

import ContactCard from './ContactCard'

function Favourites() {
  
 const contacts =useSelector(state=>state.allContacts)
    return (
        <div>
           
            {
                contacts.map(contact=>{
                   
                        if(contact.isFav ===true)
                        {
                            return (
                            <ContactCard name={contact.name} phone={contact.phone} isFav={contact.isFav} id={contact.id}/>
                            )}
                    
                })
            }
        </div>
    )
}

export default Favourites