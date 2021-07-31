import React from "react";
import "../App.css";

export default function NavBar({ home, skills, about, projects }) {
	return (
		<div>
		<div
			style={{
				position: "fixed",
				zIndex: "2000",
				top: 0,
				display: "flex",
				backgroundColor: "#00000029",
			}}
		>
			<div style={{ width: "50vw" }}></div>
			<div
				className="hoverDiv"
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto auto auto",
					width: "50vw",
					textAlign: "center",
					fontSize: "18px",
                    justifyContent:"space-evenly",
                    alignContent:"stretch"
				}}
			>
				<div style={{ position: "relative" }}>
					<p
						className="hover-effect"
						onClick={() => {
							home.current.scrollIntoView({
								behavior: "smooth",
							});
						}}
						style={{ cursor: "pointer" }}
					>
						Home
					</p>
				</div>

				<div style={{ position: "relative" }}>
					<p
						className="hover-effect"
						onClick={() => {
							about.current.scrollIntoView({
								behavior: "smooth",
							});
						}}
						style={{ cursor: "pointer" }}
					>
						About Me
					</p>
				</div>

				<div style={{ position: "relative" }}>
					<p
						className="hover-effect"
						onClick={() => {
							projects.current.scrollIntoView({
								behavior: "smooth",
							});
						}}
						style={{ cursor: "pointer" }}
					>
						Projects
					</p>
				</div>
				<div style={{ position: "relative" }}>
					<p
						className="hover-effect"
						onClick={() => {
							skills.current.scrollIntoView({
								behavior: "smooth",
							});
						}}
						style={{ cursor: "pointer" }}
					>
						Skills
					</p>
				</div>

				<div style={{ position: "relative" }}>
					<p className="hover-effect">Contact Me</p>
				</div>
			</div>
		</div>
		</div>
	);
}
