import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";


const App = () => { 
  const removeContact = (person) => {
    ContactsAPI.remove(person);
    setContacts(contacts.filter(c => c.id !== person.id));
  };

  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    const getContacts = async() => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    } 
    getContacts();
  }, []); 


  return (
  <div>
  <ListContacts contacts={contacts} onDeleteContact={removeContact}/> 
  </div>
  );
};

export default App;
