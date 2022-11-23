import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListContacts = ({ contacts, onDeleteContact }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
   setQuery(query.trim()); // burada trim bastaki ve sondaki bosluklari cikariyor, ana verimizi degistirmiyor!
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showContacts =   
    query === "" 
    ? contacts 
    : contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='list-contacts'>
      <div className='list-contacts-top'>
        <input className='search-contacts' type="text" placeholder='Search Contacts' value={query} onChange={(e) => updateQuery(e.target.value)}  />
        <Link to="/create" className='add-contact'>Add Contact</Link>
      </div>
        { 
        showContacts.length !== contacts.length && (
        <div className='showing-contacts'>
          <span>`Now showing {showContacts.length} of {contacts.length}` </span>
          <button onClick={clearQuery}> Show all</button>
        </div>
       )}
    <ol className='contact-list'>
        {showContacts.map((person) => ( 
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
    </div>
  )
}

ListContacts.propTypes = {
    contacts : PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
}

export default ListContacts
