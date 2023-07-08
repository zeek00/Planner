import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicated
}) => {

  const handleNameChange = ({target})=>{
    setName(target.value);
  }
  const handlePhoneChange = ({target})=>{
    setPhone(target.value);
  }
  const handleEmailChange = ({target})=>{
    
    // console.log(email)
    setEmail(target.value);
  }

  return (
    <form onSubmit={handleSubmit}  >
      <input
        className={styles.input}
        type="text"
        id="name"
        value={name}
        aria-label="Enter your name"
        placeholder="Enter your name" 
        onChange={handleNameChange}
      />
      <input
        className={styles.input}
        type="tel"
        id="phone"
        pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
        value={phone}
        aria-label="Enter your phone"
        placeholder="Enter your phone" 
        onChange={handlePhoneChange}
      />
      <input
        className={styles.input}
        type="email"
        id="email"
        pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
        value={email}
        aria-label="Enter your email"
        placeholder="Enter your email" 
        onChange={handleEmailChange}
      />
      {duplicated && <p>Contact already exists!</p>}
      <button className={styles.button} type="submit">Add Contact</button>

    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  duplicated: PropTypes.bool
}
