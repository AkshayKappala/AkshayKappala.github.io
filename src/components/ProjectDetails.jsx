import { motion } from "motion/react";
import githubIcon from '/assets/socials/github.svg';
import arrowUpIcon from '/assets/arrow-up.svg';

const ProjectDetails = ({
	title,
	description,
	subDescription,
	image,
	tags,
	github,
	website,
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
					className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
					type="button"
				>
					<img src="assets/close.svg" className="w-6 h-6" alt="close" />
				</button>
				<img src={image} alt={title} className="w-full rounded-t-2xl" />
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
					<p className="mb-3 font-normal text-neutral-400">{description}</p>
					{subDescription.map((subDesc, index) => (
						<p
							key={`${index}-${subDesc}`}
							className="mb-3 font-normal text-neutral-400"
						>
							{subDesc}
						</p>
					))}
					<div className="flex items-center justify-between mt-4">
						<div className="flex gap-3">
							{tags
								.filter((tag) => tag.path)
								.map((tag) => (
									<img
										key={tag.id}
										src={tag.path}
										alt={tag.name}
										className="rounded-lg size-10 hover-animation"
									/>
								))}
						</div>
						<div className="flex gap-3">
							<a
								href={github}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
							>
								<img
									src={githubIcon}
									alt="github"
									className="w-4 h-4"
								/>
								GitHub
								<img
									src={arrowUpIcon}
									className="size-4"
									alt="arrow up"
								/>
							</a>
							{website && (
								<a
									href={website}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
								>
									Website
									<img
										src={arrowUpIcon}
										className="size-4"
										alt="arrow up"
									/>
								</a>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectDetails;
