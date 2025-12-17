import { AnimatePresence } from "motion/react";
import React from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
	title,
	description,
	subDescription,
	github,
	website,
	image,
	setPreview,
	tags = [],
	hasSubDescription = false,
}) => {
	const [isHidden, setIsHidden] = React.useState(false);
	return (
		<>
			{/** biome-ignore lint/a11y/noStaticElementInteractions: false positive */}
			<div
				className="flex-wrap items-center py-10 justify-between
                space-y-14 sm:flex sm:space-y-0"
				onMouseEnter={() => setPreview(image)}
				onMouseLeave={() => setPreview(null)}
			>
				<div>
					<div className="flex items-center gap-3">
						<p className="text-2xl">{title}</p>
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all duration-300 border rounded-full text-neutral-300 bg-midnight border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white"
						>
							<img
								src="/assets/socials/github.svg"
								alt="github"
								className="w-4 h-4 opacity-80"
							/>
							GitHub
						</a>
					</div>
					<div className="flex gap-5 mt-2 text-sand">
						{tags.map((tag) => (
							<span key={tag.id}>{tag.name}</span>
						))}
					</div>
				</div>
				{/* Read More Button - Conditional */}
				{hasSubDescription && (
					<button
						type="button"
						onClick={() => setIsHidden(true)}
						className="flex items-center gap-1 cursor-pointer hover-animation"
					>
						Read More
						<img
							src="assets/arrow-right.svg"
							className="w-5"
							alt="right arrow"
						/>
					</button>
				)}
			</div>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
			<AnimatePresence>
				{isHidden && (
					<ProjectDetails
						title={title}
						description={description}
						subDescription={subDescription}
						github={github}
						website={website}
						image={image}
						tags={tags}
						closeModal={() => setIsHidden(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Project;
