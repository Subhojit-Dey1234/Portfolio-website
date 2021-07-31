import React from "react";
import "../App.css";
import Projects from "./Projects";
import image from "../images/Website.png";
import image1 from '../images/web2.png'
import image2 from '../images/ar3i.png'
import image3 from '../images/ar4.png'
import hack1 from '../images/hack1.gif'


export default function Web() {
	return (
		<div className="Web">
			<h1
				style={{ textAlign: "center", fontSize: "40px", fontWeight: "normal" }}
			>
				My Projects
			</h1>
			<Projects
				imageSrc={image}
				name={"Music Upload Website"}
				details={
					"Website includes a feature of playing, uploading, deleting music or audio format."
				}
				language={
					"Building the frontend with HTML, CSS and JavaScript and the backend with a Python framework, Django"
				}
                link = {
                    "https://github.com/Subhojit-Dey1234/musicupload"
                }
			/>
			<Projects 
			imageSrc={image1}
			name={"Ecommerce Frontend"}
			details={
				"A Ecommerce Website made with Html, CSS and JavaScript"
			}
			language={
				"Html, CSS and JavaScript"
			}
			link={
				"https://subhojit-dey1234.github.io/Ecommerce/"
			}
			/>
			<Projects 
			imageSrc={hack1}
			name={"A Website for Hackathon ( Designed and Built the Frontend )"}
			details={
				"A platform where people can support and help financialy backward people."
			}
			language={
				"Frontend - React Js Backend- Node JS"
			}
			link={
				"https://accenture-hackathon-123.herokuapp.com/"
			}
			/>
			<Projects
			imageSrc = {image2}
			classname={"Spider"}
			name = {"Augmented Reality App"}
			details = {
				"An Augmented Reality App with spawning and rotating a object in the AR App"
			}
			language = {
				"C# and Software- Unity3D & SDK used -> AR-Foundation and AR-Core"
			}
			link ={
				"https://github.com/Subhojit-Dey1234/ARProject1-Solar-System-"
			}
			/>
			<Projects
			imageSrc = {image3}

			name = {"Augmented Reality Shooting Game"}
			details = {
				"An Augmented Reality App shooting and killing the Virus present in the room"
			}
			language = {
				"C# and Software- Unity3D & SDK used -> AR-Foundation and AR-Core"
			}
			link ={
				"https://github.com/Subhojit-Dey1234/ARBajaj"
			}
			/>
		</div>
	);
}
