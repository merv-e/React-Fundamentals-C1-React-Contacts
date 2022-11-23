import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route, Routes } from "react-router-dom";

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
  <Routes>
    <Route 
      exact path="/" 
      element={
      <ListContacts 
        contacts={contacts}  
        onDeleteContact={removeContact}
        />}
    /> 
    <Route 
      path="/create" 
      element=
      {<CreateContact/>}
    />
  </Routes>
  );
};

export default App;
