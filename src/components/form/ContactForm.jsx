import { useState, useEffect } from "react";
import styles from './ContactForm.module.css'
import useContactForm from "../../hooks/useContactForm";


function ContactForm() {
	
    
    const {
        formData,
        submitted,
        errors,
        handleChange,
        handleSubmit,
      } = useContactForm();

	return (
	 <div className={styles['form-container']}>
        <h2>Contact Us</h2>
        {submitted && <p className={styles.success}>!Message sent successfully!</p>}
        <form onSubmit={handleSubmit} data-testid="contact-form">
        <div >
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name="name"  data-testid="name" value={formData.name} onChange={handleChange} />   
            {errors.name && <p className={styles.error}>The name is required</p>}
        </div>
        <div >
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name="email" data-testid="email" value={formData.email} onChange={handleChange}/>   
            {errors.email && <p className={styles.error}>The email is required</p>}
        </div>
        <div >
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id='phone' name="phone"  data-testid="phone" value={formData.phone} onChange={handleChange}/>   
            {errors.phone && <p className={styles.error}>The phone is required</p>}
        </div>
        <div >
            <label htmlFor="message">Message:</label>
            <textarea  name='message' id='message' data-testid="message" rows="5" cols="40" value={formData.message} onChange={handleChange}/>  
            {errors.message && <p className={styles.error}>The message is required</p>} 
        </div>
        <button type="submit">Send</button>
        </form>
        

     </div>
	)
}
export default ContactForm;
