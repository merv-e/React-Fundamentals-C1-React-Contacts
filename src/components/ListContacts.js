import React from 'react'


function ListContacts({ contacts, onDeleteContact }) {
  return (
    <ol className='contact-list'>
        {contacts.map((person) => ( 
          <li key={person.id} className="contact-list-item">
            <div 
                className='contact-avatar' 
                style={{ 
                  backgroundImage: `url(${person.avatarURL})`}}>
            </div>
            <div className='contact-details'>
               <p>{person.name}</p>
               <p>{person.handle}</p>
            </div>
            <button className='contact-remove' onClick={() => onDeleteContact(person)}>Remove</button>
          </li>))} 
    </ol> 
  )
}

export default ListContacts
