import { AnimatePresence } from "motion/react";
import React from "react";
import AwardDetails from "./AwardDetails";

const Award = ({
	title,
	description,
	subDescription,
	image,
	originalHref,
	setPreview,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			{/** biome-ignore lint/a11y/noStaticElementInteractions: false positive */}
			<div
				className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
				onMouseEnter={() => setPreview?.(image)}
				onMouseLeave={() => setPreview?.(null)}
			>
				<div className="max-w-3xl">
					<p className="text-2xl">{title}</p>
					<p className="mt-2 text-sand">{description}</p>
				</div>
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="flex items-center gap-1 cursor-pointer hover-animation"
				>
					Read More
					<img src="assets/arrow-right.svg" className="w-5" alt="right arrow" />
				</button>
			</div>
			<div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
			<AnimatePresence>
				{isOpen && (
					<AwardDetails
						title={title}
						description={description}
						subDescription={subDescription}
						image={image}
						originalHref={originalHref}
						closeModal={() => setIsOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Award;
