import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'
function AllContacts() {

    const contacts = useSelector(state=>state.allContacts)
    console.log(contacts)
    return (
        <div>

            {
             
             contacts.map(contact =>{
                 return (   <ContactCard name={contact.name} phone={contact.phone} isFav={contact.isFav} id={contact.id}/>)
             })
            }

            
           

        </div>
    )
}

export default AllContacts