import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Web from "./components/Web";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
	const projects = React.useRef(null);
  const skills = React.useRef(null)
  const about = React.useRef(null)
  const home = React.useRef(null)
	return (
		<div>
			<NavBar home={home} skills={skills} about={about} projects={projects}/>
      <div ref={home}>
			<Home  projects={projects} />
      </div>
			<div ref={skills}>
				<Skills />
			</div>
			<div ref={about}>
				<About />
			</div>
			<div ref={projects}>
				<Web />
			</div>
		</div>
	);
}

export default App;
