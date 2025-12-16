import About from "./sections/About";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

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
				<Contact />
			</div>
			<Footer />
		</div>
	);
};

export default App;
