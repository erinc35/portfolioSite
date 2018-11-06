import React from 'react';
import FadeIn from 'react-fade-in';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
    return ( 
        <div id="top" className="snow">
            <nav id="navbar">
                {/* <div class="container-fluid"> */}
                    {/* <ul class="nav navbar-nav"> */}
                        <li className="active" ><a href="#top" id="intro-nav">INTRO</a></li>
                        <li ><a id="projects-nav" href="#portfolio">PROJECTS</a></li>
                        <li ><a id="projects-nav" href="#experience">EXPERIENCE</a></li>
                        <li ><a className="deneme" id="education-nav" href="#education">EDUCATION</a></li>
                        <li ><a id="contact-nav" href="#contact">CONTACT</a></li>
                        <li ><a id="resume-nav" href="#resume" >RESUME</a></li>
                    {/* </ul> */}
                {/* </div> */}
            </nav>
            <div className="greeting">
                <FadeIn delay={300}>
                    <div>
                        <p className="intro-p">HELLO, I'M <span className="name"> ERINÇ EMER</span>. </p>
                    </div>
                    <div>
                        <p className="intro-p">I SOLVE PROBLEMS IN</p>
                    </div>
                    <div>
                        <p className="intro-p">ELEGANT WAYS.</p>
                    </div>
                </FadeIn>
            </div>
            <div className="arrow bounce"></div>
        </div>
     );
}
 


export default Intro;