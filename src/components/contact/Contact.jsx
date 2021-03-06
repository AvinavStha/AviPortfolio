import React from 'react';
import "./contact.css";
import email from "../../img/email.png";
import phone from "../../img/call.png";
import address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_0pp9inc",
                "template_b2sa5lr",
                formRef.current,
                "user_Q3iOaKy6j5eWFXc3NaKiY")
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
                            16 Balaju, Kathmandu 44600, Nepal
                        </div>
                        <div className="c-socialLinks">
                            <a href="https://github.com/AvinavStha/"
                                className="github social">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/ShresAvinav/"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/shresavinav/"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/avinav-shrestha-649848196"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> If you require any further information, </b>
                        feel free to contact or email  me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", margin: 10 }} type="text" name="user_name" placeholder="Name" />
                        <input style={{ backgroundColor: darkMode && "#333", margin: 10 }} type="text" name="user_subject" placeholder="Subject" />
                        <input style={{ backgroundColor: darkMode && "#333", margin: 10 }} type="text" name="user_email" placeholder="Email" />
                        <textarea style={{ backgroundColor: darkMode && "#333", margin: 10 }} placeholder="Message" name="message" rows="5"></textarea>
                        <button style={{ margin: 10 }}>Submit </button>
                        {done && "Thank You!"}
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;