import Award from "../components/Award";
import CursorPreview from "../components/CursorPreview";
import { awards } from "../constants";
import { useCursorPreview } from "../hooks/useCursorPreview";

const Awards = () => {
	const { x, y, preview, handlePointerMove, handleHover, handleLeave } =
		useCursorPreview();

	return (
		<section
			id="awards"
			onPointerMove={handlePointerMove}
			className="relative c-space section-spacing"
		>
			<h2 className="text-heading">Awards</h2>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
			{awards.map((award) => (
				<Award
					key={award.id}
					{...award}
					showPreview={handleHover}
					hidePreview={handleLeave}
				/>
			))}
			{preview && <CursorPreview x={x} y={y} preview={preview} />}
		</section>
	);
};

export default Awards;
