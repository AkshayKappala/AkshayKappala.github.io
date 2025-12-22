import { motion } from "motion/react";
import { useState } from "react";
import closeIcon from "/assets/close.svg";
import menuIcon from "/assets/menu.svg";
import githubIcon from "/assets/socials/github.svg";

function Navigation({ onNavigate }) {
	return (
		<ul className="nav-ul">
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("about")}
				>
					About
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("projects")}
				>
					Projects
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("experience")}
				>
					Experience
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("awards")}
				>
					Awards
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("publications")}
				>
					Publications
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("certifications")}
				>
					Certifications
				</button>
			</li>
			<li className="nav-li">
				<button
					type="button"
					className="nav-link"
					onClick={() => onNavigate("contact")}
				>
					Contact
				</button>
			</li>
			<li className="nav-li">
				<a
					href="https://github.com/AkshayKappala"
					target="_blank"
					rel="noreferrer"
					className="nav-link inline-flex items-center gap-1.5"
				>
					<img src={githubIcon} alt="github" className="w-4 h-4" />
					GitHub
				</a>
			</li>
		</ul>
	);
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const headerOffset = 80; // matches 5rem scroll padding
		const y = el.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: y - headerOffset, behavior: "smooth" });
	};
	const handleNavigate = (id) => {
		scrollToSection(id);
		setIsOpen(false);
	};
	return (
		<div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
			<div className="mx-auto c-space max-w-7xl">
				<div className="flex items-center justify-between py-2 sm:py-0">
					<button
						type="button"
						onClick={() => handleNavigate("home")}
						className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
					>
						Akshay Kappala
					</button>
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="flex cursor-pointer text-neutral-400 hover:text-white 
						focus:outline-none sm:hidden"
					>
						<img
							src={isOpen ? closeIcon : menuIcon}
							className="w-6 h-6"
							alt="toggle"
						/>
					</button>
					<nav className="hidden sm:flex">
						<Navigation onNavigate={handleNavigate} />
					</nav>
				</div>
			</div>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					style={{ maxHeight: "100vh" }}
					transition={{ duration: 1 }}
					className="block overflow-hidden text-center sm:hidden"
				>
					<nav className="pb-5">
						<Navigation onNavigate={handleNavigate} />
					</nav>
				</motion.div>
			)}
		</div>
	);
};

export default Navbar;
