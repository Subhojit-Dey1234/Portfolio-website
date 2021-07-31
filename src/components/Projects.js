import React from 'react'
import '../App.css'

export default function Projects({imageSrc,name,details,language,link,classname}) {
    return (
        <div className="grid-project">
            <img src={imageSrc}  style={{width:"100%",height:"100%",alignSelf:"center",justifySelf:"center",borderRadius:"20px",margin:"20px"}} className="project-image" alt="project"/>
            <div style={{backgroundColor:"#ffffff17",padding:"30px",borderRadius:"20px"}} className={classname}>
                <div style={{width:"80%"}} className="project-details">
                    <h2>Name : {name}</h2>
                    <p><b>Details</b> : {details}</p>
                    <p><b>Language</b>: {language}</p>
                    <h3>Link:  <a target="_blank" rel="noreferrer" style={{fontWeight:"bold"}} href={link}>{link}</a></h3>
                </div>
            </div>
        </div>
    )
}
