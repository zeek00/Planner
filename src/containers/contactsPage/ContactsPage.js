import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import styles from './ContactsPage.module.css'
import PropTypes from 'prop-types';

export const ContactsPage = ({contacts, handleContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(duplicate === false){
        handleContacts(name, phone, email);
        setName('');
        setPhone('');
        setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    const found = contacts.some(item => item.name === name);
    if(found){
      setDuplicate(true);
    }

  }, [name,contacts])

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Add Contact</h2> 
        <ContactForm
          handleSubmit={handleSubmit} 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleContacts: PropTypes.func.isRequired
}