"use client";

import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import ExperienceContainer from "./components/ExperienceContainer";
import Header from "./components/Header";
import LoadingState from "./components/LoadingState";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
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
    projectLink: "https://freelancemarketplace.kacperadamski.dev",
    githubLink: "https://github.com/adamskikacper/DecentWork-Decentralised-Freelance-Marketplace",
    imageUrl: "/assets/images/freelance-marketplace.webp",
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
    imageUrl: "/assets/images/blockchain-fundraising.webp",
    videoUrl: "/assets/videos/blockchain-fundraisingv3.mp4",
    status: "recent",
  },
  {
    id: 3,
    title: "Luxury Holidays",
    description:
      "A university assignment, where I developed a CRUD website using PHP and MySQL with phpMyAdmin to store user data and holiday information. It features an admin page that allows users to add, edit, remove, and update holidays. This project helped me strengthen my skills in back-end development and database management.",
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
    projectLink: "https://adamskikacper.github.io/Luxury-Holidays/",
    githubLink: "https://adamskikacper.github.io/Luxury-Holidays/",
    imageUrl: "/assets/images/luxury-holidays.webp",
    videoUrl: "/assets/videos/luxury-holidaysv2.mp4",
    status: "legacy",
  },
  {
    id: 4,
    title: "City of Manchester",
    description:
      "A high school assignment, focused on the city of Manchester. It was built using pure HTML, CSS, and JavaScript. The project is simple and served as a foundational exercise in front-end development.",
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
    projectLink: "https://adamskikacper.github.io/City-Of-Manchester/",
    githubLink: "https://adamskikacper.github.io/City-Of-Manchester/",
    imageUrl: "/assets/images/city-of-manchester.webp",
    videoUrl: "/assets/videos/city-of-manchesterv2.mp4",
    status: "legacy",
  },
  {
    id: 5,
    title: "Charity Organisation",
    description:
      "A project that served as an exercise for layout development. I used an existing design template and translated it into code. The site is simple, without any functionality, and served as a practice exercise in layout creation.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/Charity-Organisation/",
    githubLink: "https://adamskikacper.github.io/Charity-Organisation/",
    imageUrl: "/assets/images/charity-organisation.webp",
    videoUrl: "/assets/videos/charity-organisationv2.mp4",
    status: "legacy",
  },
  {
    id: 6,
    title: "The United Arab Emirates",
    description:
      "Similarly, this project was aimed at enhancing my CSS skills for layout development. I worked with a pre-designed template and converted it into code. The site is basic, with no functionality, and served as an additional practice exercise in creating responsive layouts.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/The-United-Arab-Emirates/",
    githubLink: "https://adamskikacper.github.io/The-United-Arab-Emirates/",
    imageUrl: "/assets/images/dubai-guide.webp",
    videoUrl: "/assets/videos/dubai-guidev2.mp4",
    status: "legacy",
  },
  {
    id: 7,
    title: "Upstairs Gallery",
    description:
      "A website for a gallery in Berkhamsted, created as part of a college competition for an actual client. I used HTML, CSS, and JavaScript to build a simple website to showcase the gallery's work. Competing against other students, I won first place for delivering a functional solution. This project provided hands-on experience in front-end development and working with clients.",
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
    projectLink: "https://adamskikacper.github.io/Upstairs-Gallery/",
    githubLink: "https://adamskikacper.github.io/Upstairs-Gallery/",
    imageUrl: "/assets/images/upstairs-gallery.webp",
    videoUrl: "/assets/videos/upstairs-galleryv2.mp4",
    status: "legacy",
  },
  {
    id: 8,
    title: "Electro Constructor",
    description:
      "Created during high school as my very first attempt at web development. The technologies used were HTML to structure the content and CSS to style the page, providing a solid foundation for layout development.",
    technologies: ["HTML", "CSS", "HTML", "CSS", "HTML", "CSS"],
    projectLink: "https://adamskikacper.github.io/Electro-Constructor/",
    githubLink: "https://adamskikacper.github.io/Electro-Constructor/",
    imageUrl: "/assets/images/electro-constructor.webp",
    videoUrl: "/assets/videos/electro-constructorv2.mp4",
    status: "legacy",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingState isLoading={isLoading}>
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
          id="skills"
          className="container"
        >
          <Skills />
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
    </LoadingState>
  );
}
