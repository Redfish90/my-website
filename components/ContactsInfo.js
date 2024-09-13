'use client'

import * as emailjs from '@emailjs/browser'
import { useState } from 'react'

const ContactsInfo = () => {
  // State to capture form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// Function to send email
  const sendEmail = (e) => {
    e.preventDefault(); // Corrected typo here

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      to_name: 'Rentifis Christoforos', // You can customize this
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          // Optionally reset form fields here
          setFormData({ name: '', email: '', message: '' });

          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // This adds a smooth scrolling effect
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
  };


  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+ (30) 698 700 18 19</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:redifischris@gmail.com">
                redifischris@gmail.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>Gerakas, Athens</p>
          </div>
        </div>
        <div className="contact_form">
          <form id="cform" onSubmit={sendEmail}>
            <div className="group-val">
              <input type="text" name="name" placeholder="Name" value={formData.name}  onChange={handleInputChange} />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn fill" data-text="Send Message">
              Send Message
            </button>
          </form>
          <div className="alert-success">
            <p>
              Thanks, your message is sent successfully. We will contact you
              shortly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactsInfo;
