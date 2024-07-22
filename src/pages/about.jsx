import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								{/* <div className="subtitle about-subtitle">
									{INFO.about}
								</div> */}
								<div className="subtitle about-subtitle">
								<div>
    <p>
      Hello 👋! I'm Hassan Omar, a dedicated software engineer and front-end developer with a love for crafting intuitive and visually stunning web applications. With a strong focus on React.js and Next.js, I create dynamic and responsive websites that offer exceptional user experiences.
    </p>
    <p>
      My journey in web development started with a curiosity for how websites work and evolved into a full-blown passion for building them. Over the years, I've honed my skills in a variety of technologies including HTML, CSS, JavaScript, TypeScript, Bootstrap, Git, GitHub, VSCode, Sass, Figma, ESLint, Jest, Postman, and Tailwind CSS.
    </p>
    <p>
      I thrive on solving complex problems and bringing creative ideas to life through code. My approach to development is both analytical and artistic, ensuring that every project I work on is not only functional but also beautifully designed.
    </p>
    <p>
      When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in continuous learning and am always on the lookout for new challenges and opportunities to grow.
    </p>
    <p>
      I pride myself on my ability to collaborate effectively, communicate clearly, and deliver results that exceed expectations. Whether it's a sleek corporate site, a dynamic web application, or a simple landing page, I'm ready to help bring your project to life.
    </p>
    <p>
      Let's connect and create something amazing together.
    </p>
  </div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
