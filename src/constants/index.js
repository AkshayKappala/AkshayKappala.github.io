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
		href: "",
		logo: "",
		image: "/assets/projects/creditx_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Spring Boot",
				path: "/assets/logos/spring.svg",
			},
			{
				id: 2,
				name: "Kafka",
				path: "/assets/logos/kafka.svg",
			},
			{
				id: 3,
				name: "Oracle",
				path: "/assets/logos/oracle.svg",
			},
			{
				id: 4,
				name: "Docker",
				path: "/assets/logos/docker.svg",
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
		href: "",
		logo: "",
		image: "/assets/projects/regal_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "PHP",
				path: "/assets/logos/php.svg",
			},
			{
				id: 2,
				name: "MySQL",
				path: "/assets/logos/mysql.svg",
			},
			{
				id: 3,
				name: "JavaScript",
				path: "/assets/logos/javascript.svg",
			},
			{
				id: 4,
				name: "DigitalOcean",
				path: "/assets/logos/digitalocean.svg",
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
		href: "",
		logo: "",
		image: "/assets/projects/stationery_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Java",
				path: "/assets/logos/java.svg",
			},
			{
				id: 2,
				name: "Android",
				path: "/assets/logos/android.svg",
			},
			{
				id: 3,
				name: "Firebase",
				path: "/assets/logos/firebase.svg",
			},
			{
				id: 4,
				name: "REST API",
				path: "/assets/logos/api.svg",
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
		href: "",
		logo: "",
		image: "/assets/projects/dkm_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Python",
				path: "/assets/logos/python.svg",
			},
			{
				id: 2,
				name: "Cryptography",
				path: "/assets/logos/security.svg",
			},
			{
				id: 3,
				name: "Async",
				path: "/assets/logos/asyncio.svg",
			},
			{
				id: 4,
				name: "AES-256",
				path: "/assets/logos/encryption.svg",
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
		href: "",
		logo: "",
		image: "/assets/projects/tumble_thumbnail.webp",
		tags: [
			{
				id: 1,
				name: "Unity",
				path: "/assets/logos/unity.svg",
			},
			{
				id: 2,
				name: "C#",
				path: "/assets/logos/csharp.svg",
			},
			{
				id: 3,
				name: "Networking",
				path: "/assets/logos/network.svg",
			},
			{
				id: 4,
				name: "Android",
				path: "/assets/logos/android.svg",
			},
		],
	},
	{
		id: 6,
		title: "More Personal Projects",
		description: "",
		subDescription: [],
		href: "https://github.com/",
		logo: "",
		image: "",
		ctaLabel: "GitHub",
		tags: [
			{
				id: 1,
				name: "Find my other projects in my GitHub.",
				path: "/assets/logos/github.svg",
			},
		],
	},
];

export const mySocials = [
	{
		name: "WhatsApp",
		href: "",
		icon: "/assets/socials/whatsApp.svg",
	},
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/ali-sanati/",
		icon: "/assets/socials/linkedIn.svg",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/ali.sanatidev/reels/",
		icon: "/assets/socials/instagram.svg",
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
