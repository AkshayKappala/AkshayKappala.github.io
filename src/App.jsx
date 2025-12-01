import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
	return (
		<div className="container mx-auto max-w-7xl">
			<Navbar />
			<Hero />
			<About />
			{/* projects */}
			{/* experience */}
			{/* testimonials */}
			{/* contact */}
			{/* footer */}
			<section className="min-h-screen" />
			<section className="min-h-screen" />
			<section className="min-h-screen" />
			<section className="min-h-screen" />
			<section className="min-h-screen" />
			<section className="min-h-screen" />
		</div>
	);
};

export default App;
