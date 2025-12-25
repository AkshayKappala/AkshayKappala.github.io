import { AnimatePresence } from "motion/react";
import React from "react";
import arrowRightIcon from "/assets/arrow-right.svg";
import AwardDetails from "./AwardDetails";

const Award = ({
	title,
	description,
	subDescription,
	image,
	originalHref,
	actionLabel = "Read More",
	externalLinkLabel,
	setPreview,
	showPreview,
	hidePreview,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

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
					<p className="text-2xl">{title}</p>
					<div className="relative mt-2 overflow-hidden">
						<p className="text-sand whitespace-nowrap">{description}</p>
						<div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-primary to-transparent pointer-events-none" />
					</div>
				</div>
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="flex items-center gap-1 cursor-pointer hover-animation shrink-0"
				>
					{actionLabel}
					<img src={arrowRightIcon} className="w-5" alt="right arrow" />
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
						externalLinkLabel={externalLinkLabel}
						closeModal={() => setIsOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Award;
