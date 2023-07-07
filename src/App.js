import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);


  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, phone, email)=>{
    let contactOBJ = {
      name: name,
      phone: phone,
      email: email
    }
    setContacts(prev=>[...prev, contactOBJ])
  }
  
  const addAppointment = (title, date, contact, time)=>{
    let appointmentOBJ = {
      title: title,
      date: date,
      contact: contact,
      time: time
    }
    setAppointments(prev=>[...prev, appointmentOBJ])
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} handleContacts={addContact}  /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} handleAppointments={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
