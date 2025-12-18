import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
	const words = ["Secure", "Modern", "Scalable"];
	const variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};
	return (
		<div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
			{/* Desktop View */}
			<div className="flex-col hidden md:flex c-space">
				<motion.h1
					className="text-4xl font-medium"
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.5 }}
				>
					Hi, I'm Akshay
				</motion.h1>
				<div className="flex flex-col items-start">
					<motion.p
						className="text-5xl font-medium text-neutral-300"
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.6 }}
					>
						An Engineer <br />
						dedicated to crafting
					</motion.p>
					<motion.div
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.7 }}
					>
						<FlipWords
							words={words}
							className="text-8xl font-black text-white"
						/>
					</motion.div>
					<motion.p
						className="text-4xl font-medium text-neutral-300"
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.8 }}
					>
						Software Solutions
					</motion.p>
				</div>
			</div>
			{/* Mobile View */}
			<div className="flex flex-col md:hidden space-y-6">
				<motion.p
					className="text-4xl font-medium"
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.5 }}
				>
					Hi, I'm Akshay
				</motion.p>
				<div>
					<motion.p
						className="text-5xl font-black text-neutral-300"
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.6 }}
					>
						Building
					</motion.p>
					<motion.div
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.7 }}
					>
						<FlipWords
							words={words}
							className="text-7xl font-bold text-white"
						/>
					</motion.div>
					<motion.p
						className="text-4xl font-black text-neutral-300"
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.8 }}
					>
						Software Solutions
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default HeroText;
