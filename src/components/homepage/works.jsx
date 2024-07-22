import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="https://mostaql.hsoubcdn.com/public/assets/cards/facebook@2x.png?id=203c4c27110ce153a4a74deb6bc33993"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Front End Devolper
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="./route.jpg"
								alt="Route"
								className="work-image"
							/>
							<div className="work-title">Route </div>
							<div className="work-subtitle">
							Internship -  Frontend diploma  
							</div>
							<div className="work-duration">  Oct 2023 - Feb 2024 · 5 mos
							</div>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
