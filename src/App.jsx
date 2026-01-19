import { lazy, Suspense } from "react";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

// Lazy load sections that are below the fold
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Awards = lazy(() => import("./sections/Awards"));
const Publications = lazy(() => import("./sections/Publications"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
	return (
		<div className="container mx-auto max-w-7xl min-h-screen flex flex-col">
			<Navbar />
			<div className="flex-1">
				<Hero />
				<Suspense
					fallback={
						<div className="flex items-center justify-center py-20">
							<div className="text-xl">Loading...</div>
						</div>
					}
				>
					<About />
					<Projects />
					<Experiences />
					<Awards />
					<Publications />
					<Certifications />
					<Contact />
				</Suspense>
			</div>
			<Footer />
		</div>
	);
};

export default App;
