import Award from "../components/Award";
import CursorPreview from "../components/CursorPreview";
import { publications } from "../constants";
import { useCursorPreview } from "../hooks/useCursorPreview";

const Publications = () => {
	const { x, y, preview, handlePointerMove, handleHover, handleLeave } =
		useCursorPreview();

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
					showPreview={handleHover}
					hidePreview={handleLeave}
				/>
			))}
			{preview && <CursorPreview x={x} y={y} preview={preview} />}
		</section>
	);
};

export default Publications;
