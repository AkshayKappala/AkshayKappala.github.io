import About from "./sections/About";
import Awards from "./sections/Awards";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";

const App = () => {
	return (
		<div className="container mx-auto max-w-7xl min-h-screen flex flex-col">
			<Navbar />
			<div className="flex-1">
				<Hero />
				<About />
				<Projects />
				<Experiences />
				<Awards />
				<Publications />
				<Certifications />
				<Contact />
			</div>
			<Footer />
		</div>
	);
};

export default App;
