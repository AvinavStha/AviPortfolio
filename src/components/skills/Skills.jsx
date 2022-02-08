import React from 'react';
import CarouselContainer from '../CarouselContainer';
import "./skills.css";

const Skills = () => {
    return (
        <div className="s">
            <div className="s-left">
                <div className="s-background">
                    <div className="s-left-wrapper">

                        <div className="s-texts">
                            <h1 className="s-title">
                                My Skills
                            </h1>
                            <p className="s-desc">
                                I've basically obtained a decent knowledge of computer science and web development ideas as a learner, and I've spent a lot of my time applying these concepts to real-world applications.
                            </p>
                        </div>
                        <div className="s-Type">
                            <span className="s-types">
                                &#8226; HTML & CSS
                            </span >
                            <span className="s-types"> &#8226; Angular JS Basic</span >
                            <span className="s-types">&#8226; Python (Django)</span >
                            <span className="s-types">&#8226; PHP</span>
                            <span className="s-types">&#8226; Java</span>
                            <span className="s-types">&#8226; React JS Basic</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-right">

                <div className="s-img">
                    <CarouselContainer />
                </div>

            </div>
        </div>
    );
};

export default Skills;
