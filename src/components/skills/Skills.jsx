import React from 'react';
import CarouselContainer from '../CarouselContainer';
import "./skills.css";

const Skills = () => {
    return (
        <div className="s">
            <div className="s-left">
                <div className="s-background"></div>
                <div className="s-left-wrapper">

                    <div className="s-texts">
                        <h1 className="s-title">
                            My Skills
                        </h1>
                        <p className="s-desc">
                        I've basically obtained a decent knowledge of computer science and web development ideas as a learner, and I've spent a lot of my time applying these concepts to real-world applications.
                        </p>
                    </div>
                    <div className="s-mine">
                        <ul className="s-types">
                            <li className="s-types-list">
                                HTML & CSS
                            </li>
                            <li className="s-types-list">
                                Angular JS Basic
                            </li>
                            <li className="s-types-list">
                                Python (Django)
                            </li>
                            <li className="s-types-list">
                                PHP
                            </li>
                            <li className="s-types-list">
                                Java
                            </li>
                            <li className="s-types-list">
                                React JS Basic
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="s-right">
                <div className="s-achievements">
                    <h1>My Achievements</h1>
                </div>
                <div className="s-img">
                    <CarouselContainer />
                </div>
                
            </div>
        </div>
    );
};

export default Skills;
