import React from 'react';
import './about.css';
import education from "../../img/education.png";
import avinav from "../../img/avinav.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={avinav} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Objectives</h1>
                <p className="a-sub">
                    An independent and hard-working student with an aim for creating elegant solutions in the least amount of time. Developed an ecommerce webapp & websites using various technologies.
                </p>
                <p className="a-desc">
                Assure a responsible career opportunity to fully utilize my training and skills, while making a remarkable contribution for providing elegant solutions.                    
                </p>
                <div className="a-award">
                    <img src={education} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h2 className="a-award-title">Education</h2>
                        <p className="a-award-desc">
                            <b>Bachelor of Information Management</b> <br/>
                            National College of Computer Studies / Kathmandu / Oct, 2017 - Present <br/>
                            <b>High School</b><br/>
                            Southwestern State College / Kathmandu / Jul, 2015 - Oct, 2017<br/>
                            <b>School</b><br/>
                            Siddhartha Vanasthali Institute / Kathmandu / - Jun, 2015
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

