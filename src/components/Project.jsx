import { AnimatePresence } from "motion/react";
import React from "react";
import arrowRightIcon from "/assets/arrow-right.svg";
import githubIcon from "/assets/socials/github.svg";
import ProjectDetails from "./ProjectDetails";

const Project = ({
	title,
	description,
	subDescription,
	github,
	website,
	image,
	setPreview,
	showPreview,
	hidePreview,
	tags = [],
	hasSubDescription = false,
}) => {
	const [isHidden, setIsHidden] = React.useState(false);
	return (
		<>
			<div
				className="flex flex-row py-10 justify-between items-end gap-4"
				onPointerEnter={(e) =>
					showPreview ? showPreview(image, e) : setPreview?.(image)
				}
				onPointerLeave={() =>
					hidePreview ? hidePreview() : setPreview?.(null)
				}
			>
				<div className="flex-1 min-w-0">
					<div>
						<p className="text-2xl inline mr-2">{title}</p>
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all duration-300 border rounded-full text-neutral-300 bg-midnight border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white align-baseline"
						>
							<img
								src={githubIcon}
								alt="github"
								className="w-4 h-4 opacity-80"
							/>
							GitHub
						</a>
					</div>
					<div className="relative mt-2 overflow-hidden">
						<div className="flex gap-5 text-sand">
							{tags.map((tag) => (
								<span key={tag.id} className="whitespace-nowrap">
									{tag.name}
								</span>
							))}
						</div>
						<div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-primary to-transparent pointer-events-none" />
					</div>
				</div>
				{/* Read More Button - Conditional */}
				{hasSubDescription && (
					<button
						type="button"
						onClick={() => setIsHidden(true)}
						className="flex items-center gap-1 cursor-pointer hover-animation shrink-0"
					>
						Read More
						<img src={arrowRightIcon} className="w-5" alt="right arrow" />
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
