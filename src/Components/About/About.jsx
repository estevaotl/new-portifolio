import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" srcset="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>PHP</p><hr style={{width: "50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>Javascript/Jquery</p><hr style={{width: "50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>AWS</p><hr style={{width: "50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>Git</p><hr style={{width: "50%"}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>

                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>

                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About