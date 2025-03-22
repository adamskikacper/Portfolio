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
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Cloudflare",
      "Shadcn UI",
      "Motion",
      "React Query",
      "GraphQL",
      "MoonPay",
      "Solidity",
      "Ethereum",
      "Thirdweb",
      "Web3.js",
      "Ethers.js",
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
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "recent",
  },
  {
    id: 3,
    title: "Decentralised Fundraising Platform",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "recent",
  },
  {
    id: 4,
    title: "Decentralised Fundraising Platform",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "legacy",
  },
  {
    id: 5,
    title: "Decentralised Fundraising Platform",
    description:
      "A decentralised fundraising platform built on the Ethereum blockchain where users can authenticate via MetaMask, create campaigns, and donate in Ethereum on the Sepolia testnet. Smart contracts written in Solidity manage campaign creation, donations, and fund transfers. All transactions are verifiable on Etherscan for complete transparency.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    projectLink: "https://elegant-praline-d51b21.netlify.app/",
    githubLink: "https://github.com/adamskikacper/ETHelp-Decentralised-Fundraising-Platform",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
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
