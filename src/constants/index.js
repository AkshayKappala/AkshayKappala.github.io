// Award images
import ieeeImg from "/assets/awards/ieee.webp";
import ieeeorgImg from "/assets/awards/ieeeorg.webp";
import tech2018Img from "/assets/awards/tech2018.webp";
import tech2018orgImg from "/assets/awards/tech2018org.webp";
// Certificate images
import comptiaCertImg from "/assets/certificates/comptia_cert.webp";
import googleCertImg from "/assets/certificates/google_cert.webp";
// Project images
import creditxImg from "/assets/projects/creditx_thumbnail.webp";
import dkmImg from "/assets/projects/dkm_thumbnail.webp";
import portfolioImg from "/assets/projects/portfolio_thumbnail.webp";
import regalImg from "/assets/projects/regal_thumbnail.webp";
import stationeryImg from "/assets/projects/stationery_thumbnail.webp";
import tumbleImg from "/assets/projects/tumble_thumbnail.webp";
import githubIcon from "/assets/socials/github.svg";

// Social icons
import linkedinIcon from "/assets/socials/linkedin.svg";
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
		image: creditxImg,
		tags: [
			{
				id: 1,
				name: "Java",
				path: logoUrls.java,
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
		image: stationeryImg,
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
		id: 3,
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
		image: regalImg,
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
		id: 4,
		title: "Interactive Portfolio Website",
		description:
			"A modern, responsive portfolio website built with React, featuring 3D graphics, smooth animations, and an interactive design to showcase projects and experience.",
		subDescription: [
			"Built with React 19 and Vite for lightning-fast performance with optimized bundle sizes and lazy loading.",
			"Implemented interactive 3D graphics using Three.js and React Three Fiber with real-time astronaut model tracking.",
			"Designed fully responsive UI with Tailwind CSS 4, featuring parallax effects, animated text, and physics-based draggable cards.",
			"Integrated EmailJS for contact form functionality and deployed with optimized WebP images for faster load times.",
		],
		website: "https://akshaykappala.github.io",
		github: "https://github.com/AkshayKappala/AkshayKappala.github.io",
		image: portfolioImg,
		tags: [
			{
				id: 1,
				name: "React",
				path: logoUrls.react,
			},
			{
				id: 2,
				name: "Three.js",
				path: logoUrls.threejs,
			},
			{
				id: 3,
				name: "Tailwind",
				path: logoUrls.tailwind,
			},
			{
				id: 4,
				name: "Vite",
				path: logoUrls.vite,
			},
		],
	},
	{
		id: 5,
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
		image: dkmImg,
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
		id: 6,
		title: "Real-Time Multiplayer Game",
		description:
			"A modern, responsive portfolio website built with React, featuring 3D graphics, smooth animations, and an interactive design to showcase projects and experience.",
		subDescription: [
			"Built with React 19 and Vite for lightning-fast performance with optimized bundle sizes and lazy loading.",
			"Implemented interactive 3D graphics using Three.js and React Three Fiber with real-time astronaut model tracking.",
			"Designed fully responsive UI with Tailwind CSS 4, featuring parallax effects, animated text, and physics-based draggable cards.",
			"Integrated EmailJS for contact form functionality and deployed with optimized WebP images for faster load times.",
		],
		website: "https://akshaykappala.github.io",
		github: "https://github.com/AkshayKappala/AkshayKappala.github.io",
		image: tumbleImg,
		tags: [
			{
				id: 1,
				name: "React",
				path: logoUrls.react,
			},
			{
				id: 2,
				name: "Three.js",
				path: logoUrls.threejs,
			},
			{
				id: 3,
				name: "Tailwind",
				path: logoUrls.tailwind,
			},
			{
				id: 4,
				name: "Vite",
				path: logoUrls.vite,
			},
		],
	},
	{
		id: 7,
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
		image: ieeeImg,
		originalHref: ieeeorgImg,
	},
	{
		id: 2,
		title: "National Hackathon Winner",
		description: "Tech 2018, India",
		subDescription: [
			"Secured 1st place in a 24-hour gaming hackathon organized by APITA, UNESCO MGIEP, and Unity. Developed a Unity-based game promoting UNESCO’s peace education objectives.",
		],
		image: tech2018Img,
		originalHref: tech2018orgImg,
	},
];

export const publications = [
	{
		id: 1,
		title:
			"A Novel Approach to Quantum-Resistant Selective Encryption for Agricultural Sensors With Limited Resources",
		description: "IEEE CCWC 2025",
		subDescription: [
			"This work presents DWT-based selective encryption for agricultural images on resource-constrained edge devices, accelerated via parallel CPU processing to avoid additional GPGPU hardware. It incorporates post-quantum security using NIST candidates ML-KEM-1024 (key encapsulation) and ML-DSA (signature verification), and reports strong visual degradation of encrypted data (mean PSNR 4.7201 dB, SSIM 0.0003) alongside 21.47%–52.43% performance improvement versus full AES-256 across file sizes.",
		],
		originalHref: "https://doi.org/10.1109/CCWC62904.2025.10903955",
		externalLinkLabel: "View Publication",
	},
	{
		id: 2,
		title:
			"A Dynamic Quantum-Resistant Selective Encryption Approach for Agricultural Sensors with Limited Resources",
		description: "IEEE Access (Under Review)",
		subDescription: [
			"This paper proposes Dynamic Quantum-Resistant Selective Encryption (DQRSE) for agricultural sensors, combining 2D-DWT with NIST post-quantum primitives (ML-KEM-1024 for encapsulation and ML-DSA for signatures). The approach selectively encrypts the LL2 sub-band using AES-256-GCM and protects high-frequency sub-bands with HMAC-SHA256, with content-adaptive key rotation triggered when Frobenius-norm image differences exceed threshold τ. On CottonWeedID15 (5,187 images), it reports NPCR 99.6%, UACI 33.4%, and encrypted pixel correlation < 0.005; performance measurements on Debian VMs are presented as idealized lower bounds relative to ARM Cortex-M targets.",
		],
	},
];

export const certifications = [
	{
		id: 1,
		title: "CompTIA Security+ (SY0-701)",
		description: "CompTIA",
		subDescription: [],
		image: comptiaCertImg,
		originalHref:
			"https://cp.certmetrics.com/CompTIA/en/public/verify/credential/NBKWLX75TFVE1ZKE",
		actionLabel: "View Certificate",
		externalLinkLabel: "Verify Credentials",
	},
	{
		id: 2,
		title: "Google Cybersecurity Professional",
		description: "Google",
		subDescription: [],
		image: googleCertImg,
		originalHref:
			"https://www.coursera.org/account/accomplishments/professional-cert/8H7POV9B7JTM",
		actionLabel: "View Certificate",
		externalLinkLabel: "Verify Credentials",
	},
];

export const mySocials = [
	{
		name: "Linkedin",
		href: "https://www.linkedin.com/in/akshaykappala/",
		icon: linkedinIcon,
	},
	{
		name: "Github",
		href: "https://github.com/akshaykappala",
		icon: githubIcon,
	},
];

export const experiences = [
	{
		title: "Full-Stack Software Engineer (Contract)",
		company: "PayPal",
		date: "May 2025 - Present",
		contents: [
			"Built responsive payment dashboards using React.js and Java Spring Boot handling 2000+ RPM with 99.9% uptime.",
			"Developed full-stack payment workflows on Apache Tomcat, reducing processing time by 25%.",
			"Integrated legacy systems with REST + Kafka; interfaced with TSYS mainframe green screens for business support.",
			"Improved API performance by 30% through code splitting, PL/SQL optimization on Oracle DB, and Redis caching.",
			"Implemented secure web applications with JWT authentication following OWASP guidelines in Agile environment.",
			"Maintained 90%+ test coverage with JUnit/Jest and system observability using Datadog/Splunk monitoring.",
		],
	},
	{
		title: "Research Engineer",
		company: "Dakota State University",
		date: "Jun 2024 - May 2025",
		contents: [
			"Developed Python tools for threat modeling and protocol analysis to improve detection of IOCs. (GitHub)",
			"Implemented post-quantum cryptographic algorithms with hybrid key exchange for enhanced data security. (GitHub)",
			"Built network simulations with VMware and GNS3 to validate secure communication protocols.",
			"Led Hybrid Quantum Cryptography research for Digital Agriculture, increasing security and efficiency by 22%. (Link)",
		],
	},
	{
		title: "Full-Stack Engineer",
		company: "Accenture",
		date: "Apr 2021 - Jun 2023",
		contents: [
			"Developed full-stack lending platform with React.js/Vite and Spring Boot supporting 5,000+ daily loan applications.",
			"Created interactive dashboards for credit underwriting with dynamic forms and ML-based decision engine integration.",
			"Implemented secure web applications on Linux with authentication and encryption for sensitive financial data.",
			"Optimized database queries on Oracle and SQL Server, reducing processing time by 40% for high-volume transactions.",
			"Collaborated in Agile teams to translate business requirements into full-stack technical solutions.",
		],
	},
	{
		title: "Founding Member, Game Designer & Developer",
		company: "Khadga Entertainment",
		date: "Dec 2017 - Feb 2021",
		contents: [
			"Designed multiple game titles, establishing core gameplay mechanics, level design, and player UX. (Link)",
			"Released multiple titles on Google Play Store, managing full production lifecycle from development to launch. (Link)",
			"Developed real-time multiplayer systems using Unity and C# enabling cross-device sync with low-latency networking.",
			"Built 20+ custom Unity plugins to automate builds and optimize rendering and multiplayer performance.",
			"Collaborated in Agile teams using Git, participated in daily Scrum, and mentored interns on coding standards.",
		],
	},
];
