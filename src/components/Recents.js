import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function Recents() {
    const allContacts = useSelector(state => state.allContacts)
    const recentCalls = useSelector(state => state.recentContacts)
    console.log(recentCalls)
    let arr = []

    for (let i = recentCalls.length; i >= 0; i--) {
        let currId = recentCalls[i]
        allContacts.forEach(contact => {
            if (contact.id === currId) {
                arr.push(<ContactCard name={contact.name} phone={contact.phone} isFav={contact.isFav} id={contact.id} />)
            }
        });
    }

    return (
        <div>
            {
              arr.map(ele=>ele)
              
            }
        </div>
    )
}

export default Recents