import CursorPreview from "../components/CursorPreview";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { useCursorPreview } from "../hooks/useCursorPreview";

const Projects = () => {
	const { x, y, preview, handlePointerMove, handleHover, handleLeave } =
		useCursorPreview();

	return (
		<section
			id="projects"
			onPointerMove={handlePointerMove}
			className="relative c-space section-spacing"
		>
			<h2 className="text-heading">My Personal Projects</h2>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
			{myProjects.map((project) => (
				<Project
					key={project.id}
					{...project}
					showPreview={handleHover}
					hidePreview={handleLeave}
					hasSubDescription={
						project.subDescription && project.subDescription.length > 0
					}
				/>
			))}
			{preview && <CursorPreview x={x} y={y} preview={preview} />}
		</section>
	);
};

export default Projects;
