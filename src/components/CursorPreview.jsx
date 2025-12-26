import { motion, useSpring } from "motion/react";

const CursorPreview = ({ x, y, preview }) => {
	const springX = useSpring(x, { damping: 10, stiffness: 50 });
	const springY = useSpring(y, { damping: 10, stiffness: 50 });

	return (
		<motion.img
			className="fixed top-0 left-0 z-50 object-cover aspect-video rounded-lg shadow-lg pointer-events-none w-80"
			src={preview}
			style={{ x: springX, y: springY }}
		/>
	);
};

export default CursorPreview;
