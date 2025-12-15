import React from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
	title,
	description,
	subDescription,
	href,
	image,
	ctaLabel,
	setPreview,
	tags = [],
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
					<p className="text-2xl">{title}</p>
					<div className="flex gap-5 mt-2 text-sand">
						{tags.map((tag) => (
							<span key={tag.id}>{tag.name}</span>
						))}
					</div>
				</div>
				{ctaLabel && href ? (
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-1 cursor-pointer hover-animation"
					>
						{ctaLabel}
						<img
							src="assets/arrow-right.svg"
							className="w-5"
							alt="right arrow"
						/>
					</a>
				) : (
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
			{isHidden && (
				<ProjectDetails
					title={title}
					description={description}
					subDescription={subDescription}
					href={href}
					image={image}
					tags={tags}
					closeModal={() => setIsHidden(false)}
				/>
			)}
		</>
	);
};

export default Project;
