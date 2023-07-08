import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import styles from './AppointmentsPage.module.css'
import PropTypes from 'prop-types';

export const AppointmentsPage = ({contacts, appointments, handleAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const [busy, setBusy] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if(!appointments.find(appointment=> appointment.date===date) && !appointments.find(appointment=>appointment.time===time )){
      setBusy(false);
      handleAppointments(title,contact,date,time);
      setTitle('');
      setContact('');
      setDate('');
      setTime('');
    }else{
      setBusy(true);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          busy={busy}
         />
      </section>
      <section>
        <h2 className={styles.h2}>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  contacts: PropTypes.array.isRequired, 
  appointments: PropTypes.array.isRequired,
  handleAppointments: PropTypes.func.isRequired
}