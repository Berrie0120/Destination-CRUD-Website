import React from 'react';
import Contact from "./Contacts";
import Profile from "./Profile";
import Skills from "../HomePage/Skills";
import Education from "./Education";
import Certificates from "../HomePage/Certificates";
import WorkList from './WorkList';

const Resume = () => {
    return ( 
        <>
            <div className='resume-page'>
                <div className="persoalDetails">
                    <Profile/>
                    <Contact/>
                    <Skills/>
                </div>
                <div className="profesionalBackground">
                    <Education/>
                    <hr/>
                    <WorkList/>
                    <Certificates/>
                </div>
            </div>
        </>
     );
}
 
export default Resume;