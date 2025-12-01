import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
	const skills = [
		"auth0",
		"blazor",
		"csharp",
		"dotnet",
		"threejs",
		"vitejs",
		"tailwindcss",
	];
	return (
		<div className="relative flex h-60 w-full flex-col items-center justify-center">
			<OrbitingCircles iconSize={40}>
				{skills.map((skill) => (
					<Icon key={skill} src={`assets/logos/${skill}.svg`} />
				))}
			</OrbitingCircles>
			<OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
				{skills.reverse().map((skill) => (
					<Icon key={skill} src={`assets/logos/${skill}.svg`} />
				))}
			</OrbitingCircles>
		</div>
	);
}

const Icon = ({ src }) => (
	<img
		src={src}
		alt="icon"
		className="rounded-sm hover:scale-110 duration-200"
	/>
);
