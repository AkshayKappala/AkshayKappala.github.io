import { useMotionValue } from "motion/react";
import { useRef, useState } from "react";

export const useCursorPreview = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const [preview, setPreview] = useState(null);

	const pendingPreviewRef = useRef(null);
	const pendingTargetRef = useRef(null);
	const pendingTimerRef = useRef(null);
	const hideTimerRef = useRef(null);
	const lastPointerRef = useRef({ x: 0, y: 0 });

	const handlePointerMove = (e) => {
		const px = e.clientX;
		const py = e.clientY;
		lastPointerRef.current = { x: px, y: py };

		// Always update coordinates
		x.set(px + 20);
		y.set(py + 20);

		// Clear pending detection timers if we get a real move event
		if (pendingTimerRef.current) {
			clearTimeout(pendingTimerRef.current);
			pendingTimerRef.current = null;
			pendingTargetRef.current = null;
		}

		// Use the pending preview if we were waiting for coordinates
		if (pendingPreviewRef.current) {
			setPreview(pendingPreviewRef.current);
			pendingPreviewRef.current = null;
		}
	};

	const handleHover = (src, e) => {
		// Cancel any pending hide action (Debounce strategy)
		if (hideTimerRef.current) {
			clearTimeout(hideTimerRef.current);
			hideTimerRef.current = null;
		}

		const px = e?.clientX ?? 0;
		const py = e?.clientY ?? 0;

		// Trackpad/Scroll Edge Case: (0,0) coordinates
		if (px === 0 && py === 0) {
			// If we have a recent pointer position, use it
			if (lastPointerRef.current.x !== 0 || lastPointerRef.current.y !== 0) {
				x.set(lastPointerRef.current.x + 20);
				y.set(lastPointerRef.current.y + 20);
				setPreview(src);
				return;
			}
			// If we have a target element, center on it as fallback
			const rect = e?.currentTarget?.getBoundingClientRect?.();
			if (rect) {
				const cx = rect.left + rect.width / 2;
				const cy = rect.top + rect.height / 2;
				x.set(cx + 20);
				y.set(cy + 20);
				setPreview(src);
				return;
			}

			// Final fallback: wait briefly for a pointermove event
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

		// Standard Case: Valid coordinates
		x.set(px + 20);
		y.set(py + 20);
		setPreview(src);
	};

	const handleLeave = () => {
		// Debounce hide to prevent snapping on rapid transitions
		hideTimerRef.current = setTimeout(() => {
			setPreview(null);
		}, 100);

		// Clear any pending trackpad logic
		pendingPreviewRef.current = null;
		if (pendingTimerRef.current) {
			clearTimeout(pendingTimerRef.current);
			pendingTimerRef.current = null;
			pendingTargetRef.current = null;
		}
	};

	return {
		x,
		y,
		preview,
		handlePointerMove,
		handleHover,
		handleLeave,
	};
};
