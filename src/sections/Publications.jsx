import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import Award from "../components/Award";
import { publications } from "../constants";

const Publications = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { damping: 10, stiffness: 50 });
	const springY = useSpring(y, { damping: 10, stiffness: 50 });
	const pendingPreviewRef = useRef(null);
	const pendingTargetRef = useRef(null);
	const pendingTimerRef = useRef(null);
	const lastPointerRef = useRef({ x: 0, y: 0 });

	const handlePointerMove = (e) => {
		const px = e.clientX;
		const py = e.clientY;
		lastPointerRef.current = { x: px, y: py };
		x.set(px + 20);
		y.set(py + 20);
		if (pendingTimerRef.current) {
			clearTimeout(pendingTimerRef.current);
			pendingTimerRef.current = null;
			pendingTargetRef.current = null;
		}
		if (pendingPreviewRef.current) {
			setPreview(pendingPreviewRef.current);
			pendingPreviewRef.current = null;
		}
	};

	const [preview, setPreview] = useState(null);
	const showPreview = (src, e) => {
		const px = e?.clientX ?? 0;
		const py = e?.clientY ?? 0;
		if (px === 0 && py === 0) {
			if (lastPointerRef.current.x !== 0 || lastPointerRef.current.y !== 0) {
				x.set(lastPointerRef.current.x + 20);
				y.set(lastPointerRef.current.y + 20);
				setPreview(src);
				return;
			}
			const rect = e?.currentTarget?.getBoundingClientRect?.();
			if (rect) {
				const cx = rect.left + rect.width / 2;
				const cy = rect.top + rect.height / 2;
				x.set(cx + 20);
				y.set(cy + 20);
				setPreview(src);
				return;
			}
			// wait briefly for pointermove; fallback to element center if none
			pendingPreviewRef.current = src;
			pendingTargetRef.current = e?.currentTarget ?? null;
			pendingTimerRef.current = setTimeout(() => {
				const r = pendingTargetRef.current?.getBoundingClientRect?.();
				if (r) {
					const cx = r.left + r.width / 2;
					const cy = r.top + r.height / 2;
					x.set(cx + 20);
					y.set(cy + 20);
					setPreview(src);
				}
				pendingPreviewRef.current = null;
				pendingTargetRef.current = null;
				pendingTimerRef.current = null;
			}, 80);
			return;
		}
		x.set(px + 20);
		y.set(py + 20);
		setPreview(src);
	};
	const hidePreview = () => {
		setPreview(null);
		pendingPreviewRef.current = null;
		if (pendingTimerRef.current) {
			clearTimeout(pendingTimerRef.current);
			pendingTimerRef.current = null;
			pendingTargetRef.current = null;
		}
	};

	return (
		<section
			id="publications"
			onPointerMove={handlePointerMove}
			className="relative c-space section-spacing"
		>
			<h2 className="text-heading">Publications</h2>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
			{publications.map((publication) => (
				<Award
					key={publication.id}
					{...publication}
					showPreview={showPreview}
					hidePreview={hidePreview}
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

export default Publications;
