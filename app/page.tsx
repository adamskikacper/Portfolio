"use client";

import Navbar from "./components/navbar";
import Header from "./components/header";

import AboutMe from "./components/about-me";
import ExperienceContainer from "./components/experience-container";
import ContactForm from "./components/contact-form";

import type { ProjectTypes } from "./types/projectTypes";
import Projects from "./components/project";
import Image from "next/image";
const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
];

export default function Home() {
  return (
    <div className="bg-background-primary-light text-text-primary-light dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <div className="relative lg:dark:bg-background-primary-dark">
        <Header />
      </div>

      <div className="container pb-20 pt-40">
        <AboutMe />
      </div>

      <ExperienceContainer />

      <div className="container">
        <h2 className="text-shine mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-7xl dark:text-gray-300">
          Projects
        </h2>
      </div>

      <div className="container py-10">
        <Projects projects={projects} />
      </div>

      <div className="container relative">
        <ContactForm />
      </div>
    </div>
  );
}
