import React from 'react'
import Intro from './Intro'
import profilePic from '../images/ProfilePic4.png'
import design1 from "../images/Path 2.svg"
import design2 from '../images/Path 4.svg'
import '../App.css'

export default function Home({projects}) {
    return (
        <div className="container">
            <div className="body">
                <div id="intro-anim">
                    <Intro intro={projects}/>
                </div>
                <div className="profilepic-container" style={window.innerWidth > 950 ? { overflow:"hidden",position:"relative",zIndex:"1"}: null}>
                    <img src={profilePic} alt="profile" className="profile-image"/>
                </div>
            </div>
            <img src={design1} alt="design" className="design" id="design1" />
            <img src={design1} alt="design" className="design" id="design2" />
            <img src={design2} alt="design" className="design" id="design3" />
        </div>
    )
}
