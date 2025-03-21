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
    title: "E-commerce Platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "ongoing",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "recent",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "recent",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
    status: "legacy",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    link: "#",
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
