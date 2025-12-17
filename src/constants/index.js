import { logoUrls } from "../constants/logos";

export const myProjects = [
	{
		id: 1,
		title: "Credit Card Transaction Processing Platform",
		description:
			"A distributed, event-driven microservices platform with 5 Spring Boot services orchestrated via Docker Compose for comprehensive transaction lifecycle management including authorization, posting, and promotions engine.",
		subDescription: [
			"Designed distributed microservices architecture with Spring Boot and Docker Compose for transaction lifecycle management.",
			"Built REST APIs and Apache Kafka messaging with Oracle database, implementing merchant validation, payment holds, AutoPay execution, and batch processing with Flyway schema versioning.",
			"Developed comprehensive testing strategy using TestContainers for integration tests and Mockito for unit tests following TDD approach.",
			"Implemented CI/CD ready Maven build lifecycle with Swagger UI documentation for API management.",
		],
		website: "https://akshaykappala.github.io/creditx-website/",
		github: "https://github.com/creditx-platform/creditx",
		image: "/assets/projects/creditx_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Spring",
				path: logoUrls.spring,
			},
			{
				id: 2,
				name: " Spring Boot",
				path: logoUrls.springBoot,
			},
			{
				id: 3,
				name: "Docker",
				path: logoUrls.docker,
			},
			{
				id: 4,
				name: "Postman",
				path: logoUrls.postman,
			},
			{
				id: 5,
				name: "Kafka",
				path: logoUrls.kafka,
			},
			{
				id: 6,
				name: "Oracle",
				path: logoUrls.oracle,
			},
		],
	},
	{
		id: 2,
		title: "Online Food Ordering and Management Platform",
		description:
			"A full-stack restaurant management platform allowing customers to place orders online and enabling restaurant staff to process and track orders in real time via Server-Sent Events (SSE).",
		subDescription: [
			"Built full-stack platform using PHP, JavaScript, MySQL, and HTML/CSS with real-time order tracking via Server-Sent Events (SSE).",
			"Designed RESTful APIs with secure authentication and modular backend logic for menu, orders, and user roles.",
			"Deployed on DigitalOcean with persistent storage, transaction logging, and order archival for business continuity.",
			"Implemented real-time synchronization between customer orders and restaurant staff processing interface.",
		],
		website: "",
		github: "https://github.com/AkshayKappala/regal_elephant_web",
		image: "/assets/projects/regal_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "PHP",
				path: logoUrls.php,
			},
			{
				id: 2,
				name: "JavaScript",
				path: logoUrls.javascript,
			},
			{
				id: 3,
				name: "Bootstrap",
				path: logoUrls.bootstrap,
			},
			{
				id: 4,
				name: "MySQL",
				path: logoUrls.mysql,
			},
		],
	},
	{
		id: 3,
		title: "Scalable E-Commerce Android Application",
		description:
			"A role-based Android application with Firebase Auth and Realtime Database for secure authentication and instant synchronization, enabling scalable listings and secure user interactions.",
		subDescription: [
			"Built role-based Android app in Java with Firebase Auth and Realtime Database for secure authentication and instant sync.",
			"Implemented RESTful backend logic enabling scalable product listings and secure user interactions.",
			"Designed modular workflows for sellers (ad creation/editing) and buyers (browse, direct contact) with clean RESTful APIs.",
			"Delivered predictable, real-time user experience with optimized data synchronization and responsive UI.",
		],
		website: "",
		github: "https://github.com/AkshayKappala/StationeryTrade",
		image: "/assets/projects/stationery_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Java",
				path: logoUrls.java,
			},
			{
				id: 2,
				name: "Android",
				path: logoUrls.android,
			},
			{
				id: 3,
				name: "Firebase",
				path: logoUrls.firebase,
			},
			{
				id: 4,
				name: "REST API",
				path: logoUrls.api,
			},
		],
	},
	{
		id: 4,
		title: "Secure Adaptive Key-Rotation File Transfer System",
		description:
			"A secure file transfer system using hybrid encryption combining AES-256 and post-quantum Kyber ML-KEM with automatic key rotation and DWT-based data fragmentation.",
		subDescription: [
			"Designed secure file transfer system in Python using hybrid encryption combining AES-256 and post-quantum Kyber ML-KEM with automatic key rotation.",
			"Developed custom lightweight protocol with DWT-based data fragmentation to reduce exposure during transit and optimize bandwidth.",
			"Integrated asynchronous handling and system-level logging for robust error tracking and debugging.",
			"Built benchmarking tools to validate security, latency, and throughput in high-load distributed environments.",
		],
		website: "",
		github: "https://github.com/AkshayKappala/dkm",
		image: "/assets/projects/dkm_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Python",
				path: logoUrls.python,
			},
			{
				id: 2,
				name: "Cryptography",
				path: logoUrls.encryption,
			},
			{
				id: 3,
				name: "VMWare",
				path: logoUrls.vmware,
			},
			{
				id: 4,
				name: "Wireshark",
				path: logoUrls.wireshark,
			},
		],
	},
	{
		id: 5,
		title: "Real-Time Multiplayer Game",
		description:
			"A Unity-based multiplayer action game with real-time networking, latency compensation, and client-server state synchronization for Android and desktop with custom networking for scalable cross-platform deployment.",
		subDescription: [
			"Engineered Unity-based multiplayer action game in C# with real-time networking and latency compensation for smooth gameplay.",
			"Implemented client-server state synchronization with custom networking layer for scalable cross-platform deployment on Android and desktop.",
			"Designed and shipped modular Unity plugins for physics, animation, input, and matchmaking systems.",
			"Wrote concurrency-safe, performance-optimized code enabling reusable components and seamless multiplayer experience.",
		],
		website: "",
		github: "https://github.com/AkshayKappala/Tumble-Guys",
		image: "/assets/projects/tumble_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Unity",
				path: logoUrls.unity,
			},
			{
				id: 2,
				name: "C#",
				path: logoUrls.csharp,
			},
			{
				id: 3,
				name: "Networking",
				path: "",
			},
		],
	},
	{
		id: 6,
		title: "More Personal Projects",
		description: "",
		subDescription: [],
		website: "",
		github: "https://github.com/AkshayKappala",
		tags: [
			{
				id: 1,
				name: "Find my other projects in my GitHub.",
				path: logoUrls.github,
			},
		],
	},
];

export const awards = [
	{
		id: 1,
		title: "Best Research Paper Award ",
		description: "IEEE CCWC 2025",
		subDescription: [
			"Presented research on quantum-resistant encryption for resource-constrained agricultural sensors and Received Best Paper Award in the Security, Trust, and Privacy track at IEEE CCWC 2025.",
		],
		image: "/assets/awards/ieee.webp",
		originalHref: "/assets/awards/ieeeorg.webp",
	},
	{
		id: 2,
		title: "National Hackathon Winner",
		description: "Tech 2018, India",
		subDescription: [
			"Secured 1st place in a 24-hour gaming hackathon organized by APITA, UNESCO MGIEP, and Unity. Developed a Unity-based game promoting UNESCO’s peace education objectives.",
		],
		image: "/assets/awards/tech2018.webp",
		originalHref: "/assets/awards/tech2018org.webp",
	},
];

export const mySocials = [
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/akshaykappala/",
		icon: "/assets/socials/linkedin.svg",
	},
	{
		name: "Github",
		href: "https://github.com/akshaykappala",
		icon: "/assets/socials/github.svg",
	},
];

export const experiences = [
	{
		title: "Software Engineer",
		company: "PayPal",
		date: "May 2025 - Present",
		contents: [
			"Built high-throughput payment microservices in Spring Boot handling 2000+ RPM with 99.9% uptime.",
			"Integrated legacy systems with REST + Kafka; interfaced with TSYS mainframe green screens for business support.",
			"Improved API performance by 30% through query optimization, PL/SQL procedures, and Redis caching.",
			"Collaborated with business stakeholders and cross-functional teams in Agile environment to deliver solutions.",
			"Maintained 90%+ test coverage for code quality and implemented Datadog/Splunk for system observability.",
		],
	},
	{
		title: "Graduate Intern",
		company: "PayPal",
		date: "Aug 2024 - May 2025",
		contents: [
			"Migrated monolithic payment logic into distributed microservices with zero downtime.",
			"Refactored REST APIs for backward-compatible integration with new services.",
			"Performed functional and load testing to identify scaling bottlenecks.",
		],
	},
	{
		title: "Application Developer",
		company: "Accenture",
		date: "Jul 2020 - Jun 2023",
		contents: [
			"Developed backend services in Python and Java for cloud-native lending platform supporting high-volume mortgage processing workflows with 5,000+ daily loan applications.",
			"Translated business requirements into technical specifications for lending lifecycle automation, working closely with product owners to implement digital workflows for mortgage processing.",
			"Optimized database queries on Oracle and SQL Server, reducing processing time by 40% for high-volume transactions.",
			"Collaborated with cross-functional teams to integrate ML-based decision engine for credit underwriting workflows.",
		],
	},
	{
		title: "Developer Intern",
		company: "Accenture",
		date: "Nov 2019 - Apr 2020",
		contents: [
			"Assisted in requirements gathering and analysis for financial platform modernization initiatives.",
			"Supported Agile delivery teams with SQL query development, data validation, and user acceptance testing.",
		],
	},
];
