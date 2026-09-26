export const site = {
  name: "Gaurav Soni",
  role: "Senior Software Engineer — Frontend",
  experience: "5 Years of Experience",
  tagline: "High-performance interfaces, built with care.",
  description:
    "Senior Frontend Engineer with 5 years of experience building responsive, high-performance web applications using React.js, Next.js, and TypeScript.",
  summary:
    "Senior Frontend Engineer with 5 years of experience building responsive, high-performance web applications using React.js, Next.js, and TypeScript. Skilled in leading multi-tenant architecture, real-time collaboration tools, and AI-assisted development workflows. Proven record of improving SEO performance, reducing task delivery time, and delivering secure, scalable products for EdTech platforms.",
  email: "Gauravsoni8414@gmail.com",
  phone: "8053340056",
  phoneHref: "+918053340056",
  location: "Gurugram, Haryana, India",
  address: ["Gurugram, Haryana", "India"],
  linkedin: "https://www.linkedin.com/in/gauravsoni97",
  github: "https://github.com/gauravsoni97",
  portfolio: "https://www.cvtoportfolio.com",
  resume: "/Gaurav-Soni-Resume.pdf",
  whatsapp: "https://wa.me/918053340056",
  heroIntro: "Hey, I'm Gaurav.",
  heroTitle: ["Senior", "Software", "ENGINEER"],
  heroCopy: [
    "I turn product ideas into clean, usable interfaces.",
    "Most days that means React, Next.js, and TypeScript.",
    "I care about the details that make a product feel right.",
  ],
};

export const heroStats = [
  { value: "5+", label: "Years Experience" },
  { value: "Expert", label: "UI development & animation" },
];

export const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
];

export const services = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "SEO",
  "Performance",
];

export const socials = [
  { label: "Gmail", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "WhatsApp", href: site.whatsapp },
  { label: "GitHub", href: site.github },
];

export const testimonials = [
  {
    name: "Rahul M.",
    role: "Product Lead, EdTech",
    linkedin: site.linkedin,
    quote:
      "Gaurav ships frontend work that stays stable under pressure. The proctored exam flow and live classroom UI felt production-ready, not experimental.",
  },
  {
    name: "Ananya K.",
    role: "Engineering Manager",
    linkedin: site.linkedin,
    quote:
      "Clean components, fast delivery, and a sharp eye for edge cases. He improved our dashboard tables, filters, and overall UI consistency without slowing the team down.",
  },
  {
    name: "Vikram S.",
    role: "QA Lead",
    linkedin: site.linkedin,
    quote:
      "Bugs got fixed with context, not guesswork. The Next.js migration and SEO jump made a visible difference in how the product loaded and ranked.",
  },
  {
    name: "Neha P.",
    role: "Design Partner",
    linkedin: site.linkedin,
    quote:
      "He translates Figma into interfaces that still feel considered on mobile. Collaboration was easy, and the final UI matched the intent of the design.",
  },
];

export const images = {
  avatar: "/images/avatar.jpg",
  hero: "/images/hero-desk.jpg",
  about: "https://framerusercontent.com/images/LMu5zgZjQMgv1Ve9Hu8XDR553o.jpg",
};

export const skillGroups = [
  {
    number: "01",
    title: "Languages & Markup",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "SCSS/SASS"],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    number: "03",
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Firebase", "Figma", "WordPress", "Postman"],
  },
  {
    number: "04",
    title: "AI-Assisted Development",
    items: ["Cursor", "GitHub Copilot", "Google Antigravity", "Windsurf"],
  },
  {
    number: "05",
    title: "Practices",
    items: [
      "Responsive Web Design",
      "SEO Optimization",
      "Performance Optimization",
      "Agile/Scrum",
      "REST API Integration",
    ],
  },
];

export const experience = [
  {
    slug: "sparkl",
    company: "Sparkl Edventure Pvt. Ltd.",
    role: "Senior Software Developer",
    period: "07/2024 — Present",
    location: "Gurugram, Haryana, India",
    summary:
      "Building secure EdTech products: proctored exams, live classrooms, multi-tenant architecture, and AI-assisted grading.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    image:
      "https://framerusercontent.com/images/XEPPlWgnf9vTFePGXVQysfeei8.jpg",
    bullets: [
      "Developed a proctored online test system using React, Tailwind CSS, and TypeScript, resulting in a secure live exam environment with resilient test sessions during tab switches and network interruptions.",
      "Built a live classroom interface using Agora RTC and Framer Motion, delivering real-time video and whiteboard experiences that supported 100+ concurrent student-teacher sessions.",
      "Engineered a document-camera and QR-based answer-sheet upload using camera APIs and React, enabling students to scan and submit handwritten answers directly from a mobile device or note-vision device.",
      "Implemented an AI-assisted teacher evaluation workflow (Sparky) using React and PDF.js, resulting in faster grading through bulk AI-suggested marks, accept/reject, feedback, and draft-save controls.",
      "Built multi-tenant theming and architecture using React, JWT, and proactive token refresh, resulting in a single codebase serving 4+ white-labeled business units, including Sparkl, Hale, Octane, and training portals.",
      "Developed SEO-optimized and animated responsive landing pages using HTML/CSS, Lenis, and JavaScript.",
      "Boosted task delivery speed by 85% through AI-assisted development using Cursor IDE and Google's Antigravity.",
      "Led bug resolution, sprint management, and cross-team collaboration, and conducted frontend developer interviews to support team growth.",
    ],
    stats: [
      { value: "100+", label: "Live classroom sessions" },
      { value: "4+", label: "White-labeled products" },
      { value: "85%", label: "Faster task delivery" },
    ],
  },
  {
    slug: "bounteous",
    company: "Bounteous x Accolite",
    role: "Senior Software Engineer",
    period: "02/2024 — 07/2024",
    location: "Gurugram, Haryana, India",
    summary:
      "Shipped a scalable admin dashboard with real-time data, complex tables, and cross-browser UI.",
    stack: ["React.js", "JavaScript", "REST API Integration"],
    image:
      "https://framerusercontent.com/images/Ej5ktfF292f32nLPx6v9o2RFCM.jpg",
    bullets: [
      "Developed and maintained a responsive Admin Dashboard using React.js with reusable and scalable UI components.",
      "Integrated REST APIs for managing and displaying real-time application data across dashboard modules.",
      "Implemented dynamic tables with search, filters, sorting, pagination, forms, and validation.",
      "Implemented responsive layouts and ensured cross-browser compatibility across desktop and tablet devices.",
      "Collaborated with backend developers, UI/UX designers, and QA teams to deliver and enhance dashboard features.",
      "Troubleshot UI issues, fixed bugs, and optimized frontend performance for a smoother user experience.",
    ],
    stats: [
      { value: "React", label: "Dashboard stack" },
      { value: "REST", label: "Realtime data APIs" },
      { value: "QA", label: "Cross-team delivery" },
    ],
  },
  {
    slug: "connect-lab",
    company: "Connect Lab (JumpUp 360 Pvt. Ltd.)",
    role: "Frontend Developer",
    period: "10/2021 — 02/2024",
    location: "Remote",
    summary:
      "Built mental-health platform surfaces, migrated React to Next.js, and lifted SEO from 38% to 95%.",
    stack: ["React.js", "Next.js", "SEO Optimization"],
    image:
      "https://framerusercontent.com/images/mB0INJKqVgQRpjo1imLTqc6DSU.jpg",
    bullets: [
      "Developed responsive and scalable web applications using React.js, building reusable UI components and custom React Hooks to improve code maintainability and development efficiency.",
      "Developed responsive user interfaces for mental health platforms, implementing key content-driven features like Clips, Posts, Articles, and Blogs for a seamless experience across devices.",
      "Integrated Bugsnag for real-time crash analytics and error monitoring, enabling the team to quickly identify and resolve production issues, improving platform stability.",
      "Designed responsive HTML email templates for marketing and transactional use, integrating SendGrid for reliable delivery and consistent rendering across email clients.",
      "Migrated an existing React.js application to Next.js and implemented SEO best practices, optimizing page structure and metadata to increase SEO score from 38% to 95%.",
      "Collaborated with UI/UX designers, backend developers, QA engineers, and product teams to translate business requirements into responsive, scalable frontend solutions.",
    ],
    stats: [
      { value: "38→95%", label: "SEO score" },
      { value: "Next.js", label: "React migration" },
      { value: "Bugsnag", label: "Production monitoring" },
    ],
  },
  {
    slug: "collaberus",
    company: "Collaberus Technologies",
    role: "Web Developer",
    period: "02/2021 — 05/2021",
    location: "Delhi, India",
    summary:
      "Shipped responsive product landing pages and collaborated on API-backed web designs.",
    stack: ["HTML5", "CSS3", "Bootstrap"],
    image:
      "https://framerusercontent.com/images/DTz56QzQgqb6Wcj9YKJVsfgnMNo.jpg",
    bullets: [
      "Developed responsive landing pages showcasing the company's product using Bootstrap, HTML5, and CSS3.",
      "Developed responsive web designs and collaborated with backend developers on API integration.",
    ],
    stats: [
      { value: "Bootstrap", label: "UI system" },
      { value: "HTML/CSS", label: "Landing pages" },
      { value: "APIs", label: "Backend collaboration" },
    ],
  },
  {
    slug: "karkhanawala",
    company: "Karkhanawala & Co.",
    role: "WordPress Developer",
    period: "10/2020 — 02/2021",
    location: "Gujarat, India",
    summary:
      "Designed a responsive e-commerce UI for a T-shirt printing company on WordPress.",
    stack: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    image:
      "https://framerusercontent.com/images/LMu5zgZjQMgv1Ve9Hu8XDR553o.jpg",
    bullets: [
      "Designed and developed a responsive e-commerce website user interface for a T-shirt printing company, showcasing the company's products with WordPress (Elementor).",
      "Customized WordPress themes and plugins using HTML, CSS, and JavaScript.",
    ],
    stats: [
      { value: "WP", label: "Elementor store" },
      { value: "UI", label: "E-commerce experience" },
      { value: "JS", label: "Theme customization" },
    ],
  },
] as const;

export const projects = [
  {
    slug: "cv-to-portfolio",
    title: "CV to Portfolio",
    category: "AI Product",
    summary:
      "AI-powered app that turns an uploaded PDF resume into a professional portfolio website.",
    image: "/images/cv-to-portfolio.jpg",
    logo: "/images/cv-to-portfolio.jpg",
    href: "https://www.cvtoportfolio.com",
    skills: ["React JS", "Gemini AI API"],
    password: "",
    bullets: [
      "Built an AI-powered application that converts uploaded PDF resumes into professional portfolio websites.",
      "Integrated Gemini AI API for resume parsing and structured extraction of skills, experience, education, projects, and other profile information.",
      "Implemented dynamic portfolio generation using reusable templates and responsive UI components.",
      "Automated the resume-to-portfolio workflow, reducing manual effort in creating personal portfolio websites.",
    ],
  },
  {
    slug: "macos-ui",
    title: "macOS UI Clone",
    category: "Interface",
    summary:
      "A browser-based macOS interface clone with docks, Finder, Spotlight, Safari, and more.",
    image: "/images/macos-ui.jpg",
    logo: "/images/macos-ui.jpg",
    href: "https://macosui.netlify.app",
    skills: ["ReactJs", "HTML/CSS", "JavaScript"],
    password: "1234",
    bullets: [
      "Developed features including a Login Page, Docks, New Folder Creation, Spotlight, Wi-Fi Connections, Context Menu, Control Center, Apple Menu, Restart Window, Contacts, Launchpad, Finder, Safari, and Maps.",
    ],
  },
  {
    slug: "upi-splitter",
    title: "UPI Splitter",
    category: "PWA",
    summary:
      "A PWA that splits a UPI amount into ₹1,999 QR payments so each scan stays under the ₹2,000 limit.",
    image: "/images/upi-splitter.jpg",
    logo: "/images/upi-splitter.jpg",
    href: "",
    skills: ["React JS", "Tailwind CSS", "Firebase"],
    password: "",
    bullets: [
      "Built a progressive web app that takes a total UPI amount and automatically splits it into ₹1,999 QR codes.",
      "Each generated payment stays under ₹2,000 so transfers follow the current UPI cap for a single scan.",
      "Added QR generation, UPI ID payout, optional notes, and a send/receive flow that works on desktop and mobile.",
    ],
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "Interface",
    summary:
      "A city-search weather dashboard with live conditions, location details, and a full-bleed atmospheric background.",
    image: "/images/weather-app-mockup.jpg",
    logo: "/images/weather-app-mockup.jpg",
    href: "https://whatsweathernew.netlify.app",
    skills: ["HTML/CSS", "React JS"],
    password: "",
    bullets: [
      "Built a responsive weather dashboard with React.js, HTML, and CSS, featuring a full-screen background and a clean details panel.",
      "Added city search with live temperature, cloud cover, humidity, wind, pressure, coordinates, and min/max readings.",
      "Designed a split layout — immersive scene on the left, structured weather details on the right — that stays readable on desktop and mobile.",
    ],
  },
  {
    slug: "preserve-special-moments",
    title: "Preserve Special Moments",
    category: "Website",
    summary:
      "A resin-art studio site for Dimple Soni — wedding varmalas, bridal bouquets, and keepsakes cast in museum-grade resin.",
    image: "/images/preserve-special-moments.jpg",
    logo: "/images/preserve-special-moments.jpg",
    href: "",
    skills: ["HTML/CSS", "JavaScript"],
    password: "",
    bullets: [
      "Designed and built a product website for a resin artist, with a calm editorial layout for featured collections.",
      "Showcased preserved wedding varmalas, bridal bouquets, coasters, and framed keepsakes with clear view-details paths.",
      "Added contact, social links, and a simple enquiry flow so clients can discuss custom resin pieces.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Science (BSc)",
  college: "JCD Memorial College",
  period: "05/2017 — 05/2020",
  location: "Sirsa, Haryana, India",
  detail:
    "Majored in the Non-Medical stream; graduated with an aggregate of 70%.",
};

export type Experience = (typeof experience)[number];
export type Project = (typeof projects)[number];
