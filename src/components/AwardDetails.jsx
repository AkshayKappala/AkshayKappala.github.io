import { motion } from "motion/react";
import arrowUpIcon from "/assets/arrow-up.svg";
import closeIcon from "/assets/close.svg";

const AwardDetails = ({
	title,
	description,
	subDescription,
	image,
	originalHref,
	closeModal,
}) => {
	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				className="relative max-w-2xl border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
			>
				<button
					onClick={closeModal}
					className="absolute z-20 p-2 rounded-sm top-5 right-5 bg-midnight/90 hover:bg-gray-500"
					type="button"
				>
					<img src={closeIcon} className="w-6 h-6" alt="close" />
				</button>
				{image ? (
					<div className="relative">
						<img src={image} alt={title} className="w-full rounded-t-2xl" />
						{originalHref ? (
							<a
								href={originalHref}
								target="_blank"
								rel="noreferrer"
								className="absolute bottom-4 right-4 inline-flex items-center gap-1 font-medium cursor-pointer hover-animation bg-midnight/80 border border-white/10 rounded-md px-3 py-2"
							>
								View Original
								<img src={arrowUpIcon} className="size-4" alt="arrow up" />
							</a>
						) : null}
					</div>
				) : null}
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
					<p className="mb-3 font-normal text-neutral-400">{description}</p>
					{subDescription?.map((subDesc, index) => (
						<p
							key={`${index}-${subDesc}`}
							className="mb-3 font-normal text-neutral-400"
						>
							{subDesc}
						</p>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default AwardDetails;
