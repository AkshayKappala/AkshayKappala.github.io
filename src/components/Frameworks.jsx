import { logoUrls } from "../constants/logos";
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
	const skills = [
		{ name: "java", url: logoUrls.java },
		{ name: "springBoot", url: logoUrls.springBoot },
		{ name: "kafka", url: logoUrls.kafka },
		{ name: "python", url: logoUrls.python },
		{ name: "oracle", url: logoUrls.oracle },
		{ name: "mysql", url: logoUrls.mysql },
		{ name: "react", url: logoUrls.react },
		{ name: "tailwind", url: logoUrls.tailwind },
		{ name: "docker", url: logoUrls.docker },
	];
	return (
		<div className="relative flex h-60 w-full flex-col items-center justify-center">
			<OrbitingCircles iconSize={60}>
				{skills.map((skill) => (
					<Icon key={skill.name} src={skill.url} alt={skill.name} />
				))}
			</OrbitingCircles>
			<OrbitingCircles iconSize={35} radius={100} reverse speed={2}>
				{skills.reverse().map((skill) => (
					<Icon key={skill.name} src={skill.url} alt={skill.name} />
				))}
			</OrbitingCircles>
		</div>
	);
}

const Icon = ({ src, alt }) => (
	<img
		src={src}
		alt={alt}
		className="rounded-sm hover:scale-110 duration-200"
	/>
);
