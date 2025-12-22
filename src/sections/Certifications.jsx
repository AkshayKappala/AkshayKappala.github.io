import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import Award from "../components/Award";
import { certifications } from "../constants";

const Certifications = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { damping: 10, stiffness: 50 });
	const springY = useSpring(y, { damping: 10, stiffness: 50 });
	const handleMouseMove = (e) => {
		x.set(e.clientX + 20);
		y.set(e.clientY + 20);
	};
	const [preview, setPreview] = useState(null);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: custom cursor preview handled via JavaScript events
		<section
			id="certifications"
			onMouseMove={handleMouseMove}
			className="relative c-space section-spacing"
		>
			<h2 className="text-heading">Certifications</h2>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
			{certifications.map((certification) => (
				<Award
					key={certification.id}
					{...certification}
					setPreview={setPreview}
				/>
			))}
			{preview && (
				<motion.img
					className="fixed top-0 left-0 z-50 object-cover aspect-video rounded-lg shadow-lg pointer-events-none w-80"
					src={preview}
					style={{ x: springX, y: springY }}
				/>
			)}
		</section>
	);
};

export default Certifications;
