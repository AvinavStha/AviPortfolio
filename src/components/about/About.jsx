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
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Life is a game: play it; Life is a challenge: Meet it; Life is an opportunity: Capture it.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam dicta, fuga vero cum id molestiae similique sit aspernatur inventore voluptatem assumenda aliquid, omnis dolor architecto eligendi dolores, fugiat ad.
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

