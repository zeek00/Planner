import {  Outlet, NavLink } from "react-router-dom";
import styles from './Root.module.css'

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    const handleContactClick = ()=>{
       const contact = document.getElementById('contact');
       const appointment = document.getElementById('appointment');
      
        contact.style.background="#db504a";
        contact.style.textTransform = "uppercase"
        appointment.style.textTransform = "capitalize"
        appointment.style.background="none"; 
    }
    
    const handleAppointmentClick = ()=>{
        const contact = document.getElementById('contact');
        const appointment = document.getElementById('appointment');
      
        contact.style.background="none";
        contact.style.textTransform = "capitalize"
        appointment.style.background="#db504a";
        appointment.style.textTransform = "uppercase";
    }

    return (
        <>
            <header className={styles.header}>PLANNER</header>
            <nav className={styles.nav}>
                <NavLink  className={styles.text} to={ROUTES.CONTACTS} >
                <div id="contact" data-pick="contact" onClick={handleContactClick} className={styles.item}>Contacts</div>
                </NavLink>
                <NavLink className={styles.text} to={ROUTES.APPOINTMENTS} >
                <div id="appointment" data-pick="appointment" onClick={handleAppointmentClick} className={styles.item}>Appointments</div>
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;