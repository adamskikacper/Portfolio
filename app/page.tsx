"use client";

import Header from "./components/header";
import Navbar from "./components/navbar";

import AboutMe from "./components/about-me";
import ContactForm from "./components/contact-form";
import ExperienceContainer from "./components/experience-container";

import Projects from "./components/project";
import type { ProjectTypes } from "./types/projectTypes";
const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Decentralised Freelance Marketplace",
    description:
      "A decentralised freelance marketplace where clients can post jobs and freelancers submit bids in Ethereum to complete the job. Once a bid is accepted, a smart contract is created to securely hold the payment in escrow. When job is completed, the freelancer submits the work for approval, and upon client satisfaction, the smart contract automatically releases the payment.",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "Motion",
      "React Query",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "MySQL",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "Motion",
      "React Query",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "MySQL",
    ],
    projectLink: "",
    githubLink: "",
    imageUrl: null,
    videoUrl: null,
    status: "ongoing",
  },
  {
    id: 2,
    title: "Decentralised Fundraising Platform",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "Sepolia Testnet",
      "React",
      "Tailwind CSS",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "Sepolia Testnet",
    ],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.png",
    videoUrl: "/assets/videos/blockchain-fundraisingv3.mp4",
    status: "recent",
  },
  {
    id: 3,
    title: "Luxury Holidays",
    description:
      "This project was part of my university assignment, where I developed a CRUD website using PHP and MySQL with phpMyAdmin to store user data and holiday information. It features an admin page that allows users to add, edit, remove, and update holidays. This project helped me strengthen my skills in back-end development and database management.",
    technologies: [
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "HTML",
      "CSS",
    ],
    projectLink: "https://adamskikacper.github.io/portfolio/website-luxury-holidays/index.html",
    githubLink: "https://adamskikacper.github.io/portfolio/website-luxury-holidays/index.html",
    imageUrl: "/assets/images/luxury-holidays.png",
    videoUrl: "/assets/videos/luxury-holidaysv2.mp4",
    status: "legacy",
  },
  {
    id: 4,
    title: "City of Manchester",
    description:
      "A high school assignment for the web development module, focused on the city of Manchester. It was built using pure HTML, CSS, and JavaScript, without any frameworks. The project is simple and served as a foundational exercise in front-end development.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    projectLink: "https://adamskikacper.github.io/college/",
    githubLink: "https://adamskikacper.github.io/college/",
    imageUrl: "/assets/images/city-of-manchester.jpg",
    videoUrl: "/assets/videos/city-of-manchesterv2.mp4",
    status: "legacy",
  },
  {
    id: 5,
    title: "Charity Organisation",
    description:
      "A project that served as an exercise for layout development. I used an existing design template and translated it into code. The site is simple, without any functionality, and served as a practice exercise in layout creation.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/childcare/",
    githubLink: "https://adamskikacper.github.io/childcare/",
    imageUrl: "/assets/images/charity-organisation.png",
    videoUrl: "/assets/videos/charity-organisationv2.mp4",
    status: "legacy",
  },
  {
    id: 6,
    title: "The United Arab Emirates",
    description:
      "Similarly, this project was aimed at enhancing my CSS skills for layout development. I worked with a pre-designed template and converted it into code. The site is basic, with no functionality, and served as an additional practice exercise in creating responsive layouts.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/saudiarabia/",
    githubLink: "https://adamskikacper.github.io/saudiarabia/",
    imageUrl: "/assets/images/dubai-guide.png",
    videoUrl: "/assets/videos/dubai-guidev2.mp4",
    status: "legacy",
  },
  {
    id: 7,
    title: "Upstairs Gallery",
    description:
      "A website for a gallery in Berkhamsted, created as part of a college competition for an actual client. I used HTML, CSS, and JavaScript to build a simple website to showcase the gallery’s work. Competing against other students, I won first place for delivering a functional solution. This project provided hands-on experience in front-end development and working with clients.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    projectLink: "https://adamskikacper.github.io/berkhamsted-exhibitions/",
    githubLink: "https://adamskikacper.github.io/berkhamsted-exhibitions/",
    imageUrl: "/assets/images/upstairs-gallery.png",
    videoUrl: "/assets/videos/upstairs-galleryv2.mp4",
    status: "legacy",
  },
  {
    id: 8,
    title: "Electro Constructor",
    description:
      "Created during high school, this was my very first attempt at web development. I used HTML to structure the content and CSS to style the page, providing a solid foundation for my skills in web design.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/electroconstructor/",
    githubLink: "https://adamskikacper.github.io/electroconstructor/",
    imageUrl: "/assets/images/electro-constructor.jpg",
    videoUrl: "/assets/videos/electro-constructorv2.mp4",
    status: "legacy",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background-primary-light text-text-primary-light sm:overflow-visible dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <div
        id="home"
        className="relative lg:dark:bg-background-primary-dark"
      >
        <Header />
      </div>

      <div
        id="about"
        className="container pb-10 pt-20 lg:pb-20 lg:pt-40"
      >
        <AboutMe />
      </div>

      <div
        id="experience"
        className="container py-10 lg:py-20"
      >
        <ExperienceContainer />
      </div>

      <div
        id="projects"
        className="container relative py-10"
      >
        <Projects projects={projects} />
      </div>

      <div
        id="contact"
        className="container relative py-10 lg:py-20"
      >
        <ContactForm />
      </div>
    </div>
  );
}
