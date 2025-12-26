import Award from "../components/Award";
import CursorPreview from "../components/CursorPreview";
import { certifications } from "../constants";
import { useCursorPreview } from "../hooks/useCursorPreview";

const Certifications = () => {
	const { x, y, preview, handlePointerMove, handleHover, handleLeave } =
		useCursorPreview();

	return (
		<section
			id="certifications"
			onPointerMove={handlePointerMove}
			className="relative c-space section-spacing"
		>
			<h2 className="text-heading">Certifications</h2>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
			{certifications.map((certification) => (
				<Award
					key={certification.id}
					{...certification}
					showPreview={handleHover}
					hidePreview={handleLeave}
				/>
			))}
			{preview && <CursorPreview x={x} y={y} preview={preview} />}
		</section>
	);
};

export default Certifications;
