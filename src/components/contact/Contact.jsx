import React from 'react';
import "./contact.css";
import email from "../../img/email.png";
import phone from "../../img/call.png";
import address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_eq2qupe",
                "template_mkr3fcj",
                formRef.current,
                "user_37gbrlCqZM0CHy89AEWkI")
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +977 9843597381
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            avi.shrestha.775@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            18 Balaju, Kathmandu 44600, Nepal
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> If you require any further information, </b>
                        feel free to contact or email  me. 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_name" placeholder="Name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_subject" placeholder="Subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_email" placeholder="Email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} placeholder="Message" name="message" rows="5"></textarea>
                        <button>Submit </button>
                        {done && "Thank You!"}
                    </form>
                </div>
            </div>
        </div>
    ) 
};

export default Contact;
