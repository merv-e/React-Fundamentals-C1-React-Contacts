import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";

const App = () => { 
  const removeContact = (person) => {
    ContactsAPI.remove(person);
    setContacts(contacts.filter(c => c.id !== person.id));
  };

  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("list");
  
  useEffect(() => {
    const getContacts = async() => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    } 
    getContacts();
  }, []); 


  return (
  <div>
  {
    screen === "list" && (
      <ListContacts 
      contacts={contacts} 
      onDeleteContact={removeContact} 
      onNavigate={() => setScreen("create")} />
      )
  }
  { 
    screen === "create" && (<CreateContact />)
  }
  </div>
  );
};

export default App;
