import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import styles from './AppointmentForm.module.css'


const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  busy
}) => {
  const handleTitleChange = ({target})=>{
    setTitle(target.value);
  }

  const handleDateChange = ({target})=>{
    setDate(target.value);
  }

  const handleTimeChange = ({target})=>{
    setTime(target.value);
  }
  
  const handleContactChange = ({target})=>{
    setContact(target.value);
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        id="title"
        value={title}
        aria-label="Enter your name"
        placeholder="Name your appointment" 
        onChange={handleTitleChange}
        required
      />
      <input
        className={styles.input}
        type="date"
        id="date"
        min={getTodayString()}
        pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
        value={date}
        aria-label="Enter your date"
        placeholder="Enter your date" 
        onChange={handleDateChange}
        required
      />
      <input
        className={styles.input}
        type="time"
        id="time"
        pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
        value={time}
        aria-label="Enter your time"
        placeholder="Enter your time" 
        onChange={handleTimeChange}
        required
      />
      <ContactPicker 
        name={title}
        value={contact}
        contacts={contacts} 
        onChange={handleContactChange}
      />
      {busy && <p>You already have an appointment slot by this time!</p>}
      <button className={styles.button} type="submit">Add Appointment</button>


    </form>
  );
};
