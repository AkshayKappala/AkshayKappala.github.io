import { motion, useScroll, useSpring, useTransform } from "motion/react";
import mountain1Img from "/assets/mountain-1.webp";
import mountain2Img from "/assets/mountain-2.webp";
import mountain3Img from "/assets/mountain-3.webp";
import planetsImg from "/assets/planets.webp";
import skyImg from "/assets/sky.webp";

const ParallaxBackground = () => {
	const { scrollYProgress } = useScroll();
	const x = useSpring(scrollYProgress, { damping: 50 });
	const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
	const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
	const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
	const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

	return (
		<section className="absolute inset-0 bg-black/40">
			<div className="relative h-screen overflow-y-hidden">
				{/* Background Sky */}
				<div
					className="absolute inset-0 w-full h-screen -z-50"
					style={{
						backgroundImage: `url(${skyImg})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
					}}
				/>
				{/* Mountain Layer 3 */}
				<motion.div
					className="absolute inset-0 -z-40"
					style={{
						backgroundImage: `url(${mountain3Img})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						y: mountain3Y,
					}}
				/>
				{/* Planets */}
				<motion.div
					className="absolute inset-0 -z-30"
					style={{
						backgroundImage: `url(${planetsImg})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						x: planetsX,
					}}
				/>
				{/* Mountain Layer 2 */}
				<motion.div
					className="absolute inset-0 -z-20"
					style={{
						backgroundImage: `url(${mountain2Img})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						y: mountain2Y,
					}}
				/>
				{/* Mountain Layer 1 */}
				<motion.div
					className="absolute inset-0 -z-10"
					style={{
						backgroundImage: `url(${mountain1Img})`,
						backgroundPosition: "bottom",
						backgroundSize: "cover",
						y: mountain1Y,
					}}
				/>
			</div>
		</section>
	);
};

export default ParallaxBackground;
